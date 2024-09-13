'use client';

import { useReCaptcha } from 'next-recaptcha-v3';
import { useState } from 'react';

import SubmitButton from '@components/atoms/SubmitButton';
import MessageBanner from '@components/molecules/MessageBanner';
import InputField from '../atoms/InputField';
import TextArea from '../atoms/TextArea';

type Props = {
  translations: Record<string, string>;
};

const ContactForm = ({ translations }: Props) => {
  const { executeRecaptcha } = useReCaptcha();
  const [state, setState] = useState({
    success: false,
    loading: false,
    field: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setState({
      ...state,
      loading: true,
    });

    if (!executeRecaptcha) {
      setState({
        ...state,
        field: 'form',
        loading: false,
      });

      return;
    }

    const token = await executeRecaptcha('contactForm');
    const form = e.target as unknown as {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
        token,
      }),
    }).then((res) => res.json());

    if (response?.success) {
      setState({
        ...state,
        field: '',
        loading: false,
        success: true,
      });
    } else {
      setState({
        ...state,
        field: response.field,
        loading: false,
        success: false,
      });
    }
  };

  if (state.success) {
    return (
      <MessageBanner title={translations.successTitle} text={translations.successText} success />
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputField
        name="name"
        label={translations.name}
        error={'name' === state.field && translations.nameError}
        disabled={state.loading}
      />

      <InputField
        name="email"
        type="email"
        label={translations.email}
        error={'email' === state.field && translations.emailError}
        disabled={state.loading}
      />

      <TextArea
        name="message"
        label={translations.message}
        error={'message' === state.field && translations.messageError}
        disabled={state.loading}
      />

      <div>
        { 'form' === state.field
            && <MessageBanner text={translations.submitError} classname="mb-4" error /> }
        <SubmitButton disabled={state.loading}>{translations.submit}</SubmitButton>
      </div>
    </form>
  );
};

export default ContactForm;
