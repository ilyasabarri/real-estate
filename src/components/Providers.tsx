'use client';

import React from 'react';
import { LocaleProvider } from '@/context/LocaleContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
