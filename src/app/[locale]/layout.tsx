import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Header from '@/components/header';
import { locales } from '@/config';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
    <body className={clsx(inter.className)}>
      <div className='wrapper'>
        <Header />
        <main className='page-body'>
          {children}
        </main>
        <footer className='page-footer'>Sticky footer</footer>
      </div>
    </body>
    </html>
  );
}
