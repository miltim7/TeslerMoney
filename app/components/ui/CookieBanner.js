'use client'

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieAccepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Этот сайт использует файлы cookie. Файлы cookie — это небольшие текстовые файлы,
        которые отправляются на ваше устройство доступа (мобильный телефон, компьютер,
        планшет или другое устройство для доступа в Интернет) и сохраняются на нём при
        каждом посещении веб-сайта. Файлы cookie полезны, поскольку позволяют веб-сайту
        распознавать устройство пользователя и повышать эффективность его работы. Подробнее см. в{' '}
        <a href="/cookie-policy" target="_blank">Политике использования файлов cookie</a>.
      </p>
      <button onClick={acceptCookies}>Принять</button>
    </div>
  );
}
