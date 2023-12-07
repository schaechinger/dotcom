'use client';

import { useFormState } from 'react-dom'

import { submitContact } from '@actions/submitContact';
import { SubmitButton } from '@components/forms/SubmitButton';
import CircleCheck from '../icons/CircleCheck';

const ContactForm = () => {
  const [state, submitAction] = useFormState(submitContact, { success: false })

  if (state.success) {
    return (
      <div>
        <p className="text-lg mb-2">
          <CircleCheck className="text-2xl text-primary-500 -mt-1 mr-2" />
          Ihre Anfrage wurde versendet!
        </p>
        <p>Danke für Ihre Nachricht, ich werde mich zeitnah bei Ihnen melden.</p>
      </div>
    );
  }

  return (
    <form action={submitAction}>
      <label className="block mb-8">
        <span className="text-sm text-dark-900 dark:text-slate-200">Name</span>
        <input
          type="text"
          name="name"
          className="mt-0 block bg-transparent w-full px-0 border-0 border-b-2 border-slate-200 dark:border-slate-600 focus:ring-0 focus:border-primary-500 focus:dark:border-primary-500 focus:outline-none"
          placeholder=""
          required
        />
        { 'name' === state.field
          ? <p className="text-sm text-red-500 mt-1">Bitte geben Sie Ihren Namen an</p> : null }
      </label>

      <label className="block mb-8">
        <span className="text-sm text-dark-900 dark:text-slate-200">E-Mail-Adresse</span>
        <input
          type="email"
          name="email"
          className="mt-0 block bg-transparent w-full px-0 border-0 border-b-2 border-slate-200 dark:border-slate-600 focus:ring-0 focus:border-primary-500 focus:dark:border-primary-500 focus:outline-none"
          placeholder=""
          required
        />
        { 'email' === state.field
          ? <p className="text-sm text-red-500 mt-1">Bitte geben Sie Ihre E-Mail-Adresse an</p> : null }
      </label>

      <label className="block mb-8">
        <span className="text-sm text-dark-900 dark:text-slate-200">Nachricht</span>
        <textarea
          name="message"
          className="mt-0 block bg-transparent w-full px-0 border-0 border-b-2 border-slate-200 dark:border-slate-600 focus:ring-0 focus:border-primary-500 focus:dark:border-primary-500 focus:outline-none"
          placeholder=""
          rows={4}
        />
        { 'message' === state.field
          ? <p className="text-sm text-red-500 mt-1">Bitte schildern Sie Ihr Anliegen</p> : null }
      </label>

      <SubmitButton>Absenden</SubmitButton>
      { state.message }
      { 'form' === state.field
          ? <p className="text-sm text-red-500 mt-1">Ihre Nachricht konnte nicht gesendet werden.</p> : null }
    </form>
  );
};

export default ContactForm;
