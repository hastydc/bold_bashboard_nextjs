import '@/styles/theme.scss';
import MainThemeProvider from '@/_providers/mainThemeProvider';
import { Metadata } from 'next';
import { montserrat } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Bold Dashboard',
  description: 'Bold dashboard demo 2024 in NextJS',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={montserrat.className}>
        <MainThemeProvider>{children}</MainThemeProvider>
      </body>
    </html>
  );
}
