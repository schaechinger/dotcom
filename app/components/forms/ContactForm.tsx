'use client';

import { useReCaptcha } from 'next-recaptcha-v3';

import { SubmitButton } from '@components/forms/SubmitButton';
import CircleCheck from '@components/icons/CircleCheck';
import { useState } from 'react';

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
      <div>
        <p className="text-lg mb-2">
          <CircleCheck className="text-2xl text-primary-500 -mt-1 mr-2" />
          {translations.successTitle}
        </p>
        <p>{translations.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-8">
        <span className="text-sm text-dark-900 dark:text-slate-200">{translations.name}</span>
        <input
          type="text"
          name="name"
          className="mt-0 block bg-transparent w-full px-0 border-0 border-b-2 border-slate-200 dark:border-slate-600 focus:ring-0 focus:border-primary-500 focus:dark:border-primary-500 focus:outline-none"
          placeholder=""
          required
        />
        { 'name' === state.field
          && <p className="text-sm text-red-500 mt-1">{translations.nameError}</p> }
      </label>

      <label className="block mb-8">
        <span className="text-sm text-dark-900 dark:text-slate-200">{translations.email}</span>
        <input
          type="email"
          name="email"
          className="mt-0 block bg-transparent w-full px-0 border-0 border-b-2 border-slate-200 dark:border-slate-600 focus:ring-0 focus:border-primary-500 focus:dark:border-primary-500 focus:outline-none"
          placeholder=""
          required
        />
        { 'email' === state.field
          && <p className="text-sm text-red-500 mt-1">{translations.emailError}</p> }
      </label>

      <label className="block mb-8">
        <span className="text-sm text-dark-900 dark:text-slate-200">{translations.message}</span>
        <textarea
          name="message"
          className="mt-0 block bg-transparent w-full px-0 border-0 border-b-2 border-slate-200 dark:border-slate-600 focus:ring-0 focus:border-primary-500 focus:dark:border-primary-500 focus:outline-none"
          placeholder=""
          rows={4}
        />
        { 'message' === state.field
          && <p className="text-sm text-red-500 mt-1">{translations.messageError}</p> }
      </label>

      <SubmitButton>{translations.submit}</SubmitButton>
      { 'form' === state.field
          && <p className="text-sm text-red-500 mt-2">{translations.submitError}</p> }
    </form>
  );
};

export default ContactForm;
