'use client';

import { ThemeProvider } from 'next-themes';

const Provider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider attribute="class">
    { children }
  </ThemeProvider>
);

export default Provider;
