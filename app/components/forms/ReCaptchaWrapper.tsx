import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode,
};

const ReCaptchaWrapper = ({ children }: Props) => {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_KEY} useRecaptchaNet>
      { children }
    </ReCaptchaProvider>
  )
};

export default ReCaptchaWrapper;
