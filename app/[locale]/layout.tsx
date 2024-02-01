import { Providers } from '@/components/dark-mode/providers';
import { Header } from '@/components/ui/header/header';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import './globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: 'en' | string };
}) {
  let messages;
  try {
    messages =
      locale !== 'en'
        ? (await import(`../../locales/fr.json`)).default
        : (await import(`../../locales/en.json`)).default;
  } catch (error) {
    console.log(error);
    notFound();
  }

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="relative h-full  w-full overflow-x-hidden bg-primary1 dark:bg-primary99 ">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header
              size={'large'}
              textColor={'neutral'}
              className=" absolute  w-full max-w-full px-sub-large pt-[40px] tablet:px-large tablet:pt-large"
            ></Header>
            {children}
            <div className="noise"></div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
