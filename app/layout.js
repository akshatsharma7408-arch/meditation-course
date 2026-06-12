import './globals.css';

export const metadata = {
  title: 'The Inner Peace Meditation Journey — Foundation | Guided Meditation Course',
  description: 'Begin your meditation journey with 28 guided sessions, just 10 minutes a day. Designed for complete beginners — no experience needed. Includes a built-in journal and 3 free bonus PDFs.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#111010',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
