'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import faqIcon from '@/assets/images/faq2.png';
import faqIconActive from '@/assets/images/faq1.png';
import './FaqSection.css';

export default function FaqSection(props) {
    useEffect(() => {
        const faqItems = document.querySelectorAll('.faq__item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question');
            const answer = item.querySelector('.faq__answer');
            const icon = question.querySelector('img');

            question.addEventListener('click', () => {
                faqItems.forEach(i => {
                    const a = i.querySelector('.faq__answer');
                    const ic = i.querySelector('.faq__question img');
                    if (i !== item) {
                        i.classList.remove('active');
                        a.style.maxHeight = '0';
                        ic.src = faqIcon.src;
                    }
                });

                if (item.classList.contains('active')) {
                    answer.style.maxHeight = '0';
                    icon.src = faqIcon.src;
                    item.classList.remove('active');
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.src = faqIconActive.src;
                    item.classList.add('active');
                }
            });
        });
    }, []);

    return (
        <section className="faq container" {...props}>
            <h1 className="faq__title">FAQ</h1>
            <div className="faq__item">
                <div className="faq__question">
                    Как пополнить Tesler Money из России?
                    <Image src={faqIcon} alt="icon" />
                </div>
                <div className="faq__answer">
                    Это удобный онлайн-банк для управления вашими финансами.
                </div>
            </div>
            <div className="faq__item">
                <div className="faq__question">
                    Кошелек Tesler Money: как пользоваться?
                    <Image src={faqIcon} alt="icon" />
                </div>
                <div className="faq__answer">
                    Вы можете зарегистрироваться на сайте и открыть счёт за 5 минут.
                </div>
            </div>
            <div className="faq__item">
                <div className="faq__question">
                    Tesler Money перевод на карту: как это работает?
                    <Image src={faqIcon} alt="icon" />
                </div>
                <div className="faq__answer">
                    Да, приложение доступно для iOS и Android.
                </div>
            </div>
            <div className="faq__item">
                <div className="faq__question">
                    Как заказать карту Tesler Money?
                    <Image src={faqIcon} alt="icon" />
                </div>
                <div className="faq__answer">
                    Да, приложение доступно для iOS и Android.
                </div>
            </div>
            <div className="faq__item">
                <div className="faq__question">
                    Какие комиссии и тарифы у Tesler Money?
                    <Image src={faqIcon} alt="icon" />
                </div>
                <div className="faq__answer">
                    Да, приложение доступно для iOS и Android.
                </div>
            </div>
            <div className="faq__item">
                <div className="faq__question">
                    Как привязать Tesler Money к PayPal?
                    <Image src={faqIcon} alt="icon" />
                </div>
                <div className="faq__answer">
                    Да, приложение доступно для iOS и Android.
                </div>
            </div>
        </section>
    );
};