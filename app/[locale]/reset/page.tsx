'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { LANGUAGE_SUGGESTION_OPT_OUT } from '@app/config';
import { isBrowser, useLocalStorage } from '@app/utils';
import PageContainer from '@components/organisms/PageContainer';

export const dynamic = 'force-dynamic';

const ResetPage = () => {
  const localStorage = useLocalStorage();
  const [success, setSuccess] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    if (isBrowser()) {
      localStorage.removeItem(LANGUAGE_SUGGESTION_OPT_OUT);
      setTheme('system');
      setSuccess(true);
    }
  }, [localStorage, setTheme]);

  return (
    <PageContainer name="reset" narrow>
      <section id="reset">
        <h1 className="text-h1">Reset Settings</h1>

        <p>{success ? 'Reset finished' : 'Reset in progress'}</p>
      </section>
    </PageContainer>
  );
};

export default ResetPage;
