import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import CookieBanner from './components/ui/CookieBanner';

export default function RootLayout({ children, pageTitle }) {
  return (
    <html lang="ru">
      <body>
        <Header title={pageTitle || 'Мой сайт'} />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}