import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations('PageLayout');

  return (
    <div>
      <h1>
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}
