'use client';

import { ThemeProvider } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => (
  <ThemeProvider attribute="class">
    { children }
  </ThemeProvider>
);

export default Provider;
