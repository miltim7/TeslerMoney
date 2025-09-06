'use client'
import './Footer.css';

export default function Footer(props) {
  return (
    <footer className="footer" {...props}>
      <p>© 2025 Tesler Money</p>

      <div className="footer__block">
        <div className="footer__item">
          <p>Юридические соглашения</p>
          <p>Политика защиты данных </p>
        </div>
        <div className="footer__item">
          <p>Добросовестное использование CRS и FATCA</p>
          <p>Условия и положения</p>
        </div>
        <div className="footer__item">
          <p>Политика использования файлов cookie</p>
          <p>Условия и положения - Юридические лица</p>
        </div>
        <div className="footer__item">
          <p>Для жителей России</p>
        </div>
      </div>

      <hr />

      <div className="footer__block">
        <div className="footer__item">
          <p>Tesler Money</p>
          <p>
            Мобильный и онлайн-банкинг с бесплатным IBAN, платежными картами, кэшбэками и криптовалютными
            функциями
          </p>
          <p>
            Карта Tesler Money выпущена Zapad banka AD Podgorica Moskovska broj 2b/VII sprat 81000 Podgorica,
            Crna Gora
          </p>
        </div>
      </div>
    </footer>
  );
}
