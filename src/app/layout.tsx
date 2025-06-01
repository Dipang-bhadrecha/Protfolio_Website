// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientBody from './ClientBody';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Software Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}