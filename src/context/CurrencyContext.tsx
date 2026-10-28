'use client';

import React from 'react';
import { useLocale, Currency } from './LocaleContext';

export type { Currency };

export const useCurrency = () => {
  const { currency, setCurrency, formatPrice } = useLocale();
  return { currency, setCurrency, formatPrice };
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
