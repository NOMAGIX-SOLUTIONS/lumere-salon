import { globalStyles } from '@washingtonpost/wpds-ui-kit';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Beauty Salon Template - WPDS Template | Nomagix Solutions',
  description:
    'Bespoke hair, skin, and nail services crafted for the way you live. Reserve your moment of transformation.',
};

// Inject WPDS global styles (fonts, resets, box-sizing)
globalStyles();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-full">{children}</body>
    </html>
  );
}
