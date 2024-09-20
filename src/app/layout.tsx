import { NotistackProvider } from '@/providers/NotistackProvider';
import { inter } from '@/styles/fonts';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Car Dealer',
  description: 'Application for car dealers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <body className='h-screen'>
        <NotistackProvider autoHideDuration={3000}>{children}</NotistackProvider>
      </body>
    </html>
  );
}
