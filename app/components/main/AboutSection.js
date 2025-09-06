'use client';

import { useEffect, useRef, useState } from 'react';
import aboutImg from '@/assets/images/about.png';
import about1 from '@/assets/images/about1.png';
import about2 from '@/assets/images/about2.png';
import about3 from '@/assets/images/about3.png';
import about4 from '@/assets/images/about4.png';
import about5 from '@/assets/images/about5.png';
import about6 from '@/assets/images/about6.png';
import about7 from '@/assets/images/about7.png';
import about8 from '@/assets/images/about8.png';
import about9 from '@/assets/images/about9.png';
import about10 from '@/assets/images/about10.png';
import './AboutSection.css'
import Image from 'next/image';

// Дополнительные компоненты для сложных секций
export default function AboutSection(props) {
    const aboutSlidesRef = useRef([]);
    const [offset, setOffset] = useState(50);

    useEffect(() => {
        const aboutSlides = Array.from(document.querySelectorAll('.about__slide'));
        aboutSlidesRef.current = aboutSlides;

        // if (window.innerWidth <= 432) {
        //   setOffset(75);
        // }

        let order = aboutSlides.map((_, i) => i);

        function updateAboutSlides() {
            order.forEach((slideIndex, position) => {
                const slide = aboutSlides[slideIndex];
                const y = position * offset;
                slide.style.transform = `translateY(${y}px)`;
                slide.style.zIndex = position;
            });
        }

        aboutSlides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                const clicked = order.indexOf(index);
                const newOrder = [...order];
                newOrder.splice(clicked, 1);
                newOrder.push(index);
                order = newOrder;
                updateAboutSlides();
            });
        });

        updateAboutSlides();
    }, [offset]);

    return (
        <section className="about container" {...props}>
            <div className="about__content">
                <div className="about__table">
                    <h1 className="about__title">Подробнее о нас</h1>
                    <p className="about__text">
                        Представляем Tesler Money — инновационный онлайн интернет-банк и финансовую платформу, которая
                        предоставляет удобные и безопасные решения для управления вашими финансами. Мы предлагаем выпуск
                        виртуальных и пластиковых карт, разнообразные способы пополнения и вывода средств, а также удобное
                        управление через мобильное приложение.
                    </p>
                    <div className="about__image">
                        <Image src={aboutImg} alt="Bank Cards" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__slider">
                        <div className="about__slide">
                            <div className="about__slide--first">
                                <h1>Получите мгновенный доступ к виртуальной карте Tesler Money
                                    для безопасных онлайн-платежей. Идеально подходит для интернет-покупок и подписок.</h1>
                                <Image src={about6} width={286} height={286} alt="About" />
                                <div className="about__slide--indicator">Как получить виртуальную карту Tesler Money?</div>
                            </div>
                        </div>
                        <div className="about__slide">
                            <div className="about__slide--first">
                                <h1>Закажите физическую карту Tesler Money для удобного использования в магазинах и
                                    банкоматах по всему миру. Мы обеспечиваем надежную защиту ваших средств и простое
                                    управление через приложение.</h1>
                                <Image src={about5} width={286} height={286} alt="About" />
                                <div className="about__slide--indicator">Как получить физическую пластиковую карту Tesler Money?</div>
                            </div>
                        </div>
                        <div className="about__slide">
                            <div className="about__slide--first">
                                <h1>Пополняйте свою карту Tesler Money удобным для вас способом: банковской картой, USDT,
                                    наличными или через Систему Быстрых Платежей (СБП).
                                    Вы можете пополнить Tesler Money криптовалютой и СБП через наш сайт. Мы предлагаем
                                    быстрые и безопасные методы пополнения.</h1>
                                <Image src={about4} width={286} height={286} alt="About" />
                                <div className="about__slide--indicator">Как пополнить Tesler Money в 2025 году?</div>
                            </div>
                        </div>
                        <div className="about__slide">
                            <div className="about__slide--first">
                                <h1>Выводите средства с карты Tesler Money на банковский счет, в USDT, наличными или через
                                    СБП через наш сайт. Tesler Money обеспечивает оперативные и надежные финансовые
                                    операции.</h1>
                                <Image src={about3} width={286} height={286} alt="About" />
                                <div className="about__slide--indicator">Как вывести деньги с Tesler Money?</div>
                            </div>
                        </div>
                        <div className="about__slide">
                            <div className="about__slide--first">
                                <h1>Покупайте подарочные карты для игр, программ и сервисов через наш сайт. Это идеальный
                                    выбор для подарков или личного использования. Tesler Money предлагает широкий
                                    ассортимент карт для популярных платформ и сервисов.</h1>
                                <Image src={about2} width={286} height={286} alt="About" />
                                <div className="about__slide--indicator">Что такое Tesler Money и что можно оплатить?</div>
                            </div>
                        </div>
                        <div className="about__slide">
                            <div className="about__slide--first">
                                <h1>Коины Tesler Money — удобный способ пополнения вашего счета. Приобретайте их на нашем
                                    сайте для быстрого и простого пополнения.</h1>
                                <Image src={about1} width={286} height={286} alt="About" />
                                <div className="about__slide--indicator">Где купить коины Tesler Money?</div>
                            </div>
                        </div>
                        <div className="about__slide">
                            <div className="about__slide--first">
                                <div className="about__table--first">
                                    <div className="about__table--item">
                                        <div className="about__table--img"><Image width={28} src={about7} alt="Security" /> Безопасность</div>
                                        <div>
                                            <p>Tesler Money обеспечивает высокий уровень защиты ваших данных и средств
                                                с помощью передовых технологий шифрования и многофакторной аутентификации.</p>
                                        </div>
                                    </div>
                                    <div className="about__table--item">
                                        <div className="about__table--img"><Image width={28} src={about8} alt="Convenience" /> Удобство</div>
                                        <div>
                                            <p>Управляйте финансами через мобильное приложение Tesler Money, доступное
                                                для Android и iOS. Выполняйте все операции в любое время и в любом месте.</p>
                                        </div>
                                    </div>
                                    <div className="about__table--item">
                                        <div className="about__table--img"><Image width={28} src={about9} alt="Flexibility" /> Гибкость</div>
                                        <div>
                                            <p> Широкий выбор способов пополнения и вывода средств позволяет выбрать
                                                наиболее удобный метод для вас. Tesler Money поддерживает пополнение
                                                криптовалютой.</p>
                                        </div>
                                    </div>
                                    <div className="about__table--item">
                                        <div className="about__table--img"><Image width={28} src={about10} alt="Transparency" /> Прозрачность</div>
                                        <div>
                                            <p>Никаких скрытых комиссий или неожиданных платежей. Мы предлагаем
                                                прозрачные условия и тарифы для всех наших услуг.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about__slide--indicator">Почему выбирают Tesler Money?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

