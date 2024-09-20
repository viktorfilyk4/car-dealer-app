import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { NotistackProvider } from '@/providers/NotistackProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

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
