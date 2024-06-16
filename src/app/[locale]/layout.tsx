import '@/styles/theme.scss';
import MainThemeProvider from '@/providers/mainTheme.provider';
import { Metadata } from 'next';
import { montserrat } from '@/styles/fonts';
import LayoutProvider from '@/providers/layout.provider';

export const metadata: Metadata = {
  title: 'Bold Dashboard',
  description: 'Bold dashboard demo 2024 in NextJS',
  icons: {
    icon: './favicon.ico',
  },
};

type LayoutProps = Readonly<{
  children: React.ReactNode;
  locale: string;
}>;

const RootLayout = ({ children, locale }: LayoutProps) => {
  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <MainThemeProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </MainThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
