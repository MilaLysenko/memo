import Link from 'next/link';
import React from 'react';
import { Route } from 'next';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/locale-switcher';
import ThemeSwitcher from '@/components/theme-switcher';

const items = [
  {
    label: 'home',
    path: '/'
  },
  {
    label: 'about',
    path: '/about'
  },
  {
    label: 'pathnames',
    path: '/pathnames'
  }
];

export default function Header() {
  const t = useTranslations('Header');
  const menuList = items.map(item =>
    <li className='inline' key={item.label}>
      <Link href={`${item.path}` as Route}>{t(item.label)}</Link>
    </li>
  );

  return (
    <header className='flex items-center justify-between p-2'>
      <ul className='grid grid-flow-col gap-2'>
        {menuList}
      </ul>
      <div className='grid grid-flow-col gap-2 auto-cols-min'>
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
