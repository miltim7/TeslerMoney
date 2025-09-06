'use client'
import { useEffect, useRef } from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';

import regIcon from '@/assets/images/reg.png';
import gpaySystems from '@/assets/images/gpay.png';
import apaySystems from '@/assets/images/apay.png';
import card1 from '@/assets/images/card1.png';
import card2 from '@/assets/images/card2.png';
import card3 from '@/assets/images/card3.png';
import robotImg from '@/assets/images/robot.png';
import Button from '@/components/ui/Button'
import Link from 'next/link';
import './Hero.css'

export default function Hero(props) {
    const stackRef = useRef(null);

    useEffect(() => {
        const stack = stackRef.current;
        if (stack) {
            const cards = Array.from(stack.querySelectorAll(".card"));
            const depthStep = 250;
            let ordersec = [...cards];
            function updatePositions() {
                ordersec.forEach((card, i) => {
                    card.style.transform = `translateZ(${-i * depthStep}px)`;
                    card.style.zIndex = ordersec.length - i;
                });
            }
            updatePositions();
            cards.forEach(card => {
                card.addEventListener("click", () => {
                    const idx = ordersec.indexOf(card);
                    if (idx > 0) {
                        const moved = ordersec.splice(idx, 1)[0];
                        ordersec.unshift(moved);
                        updatePositions();
                    }
                });
            });
        }
    }, []);

    return (
        <section className={`hero container ${styles.hero}`} {...props}>
            <div className="hero__menu">
                <h1 className="hero__title">Добро пожаловать в мир </h1>
                <h1 className="hero__title"><span>приватного интернет-банкинга!</span></h1>
                <p className="hero__desc">
                    Откройте для себя удобство мобильного и онлайн-банкинга с бесплатным IBAN, современными платежными
                    картами и выгодными кэшбэками.
                </p>
            </div>
            <div className="hero__content">
                <div className="hero__block">
                    <div className={styles.heroIndicator}>
                        <div className={styles.indicatorLine}></div>
                        <div className={styles.indicatorShort}></div>
                    </div>
                    <div className="hero__block--text">
                        Наслаждайтесь расширенными криптовалютными возможностями и управляйте своими финансами всего в
                        несколько кликов. Безопасно, быстро и выгодно — ваш финансовый помощник всегда рядом!
                    </div>
                    <div className="hero__block--buttons">
                        <Button
                            variant="hero__btn hero__btn--primary"
                            icon={regIcon}
                        >
                            зарегистрироваться
                        </Button>
                        <Button
                            variant="hero__btn hero__btn--secondary"
                            onClick={() => console.log('Авторизация')}
                        >
                            авторизироваться
                        </Button>
                    </div>
                    <div className="hero__block--payments">
                        поддержка <Link href="#"><Image src={gpaySystems} alt="Payment Systems" /></Link> <Link href="#"><Image src={apaySystems} alt="Payment Systems" /></Link>
                    </div>
                </div>
                <div className="hero__image cards3d">
                    <div className="stack" id="stack" ref={stackRef}>
                        <Image loading="lazy" src={card1} alt="Card 1" className="card c1" />
                        <Image loading="lazy" src={card2} alt="Card 2" className="card c2" />
                        <Image loading="lazy" src={card3} alt="Card 3" className="card c3" />
                    </div>
                </div>
                <div className="hero__image robot">
                    <Image
                        src={robotImg}
                        alt="Банковские карты"
                        style={{ top: '45px', right: '0', position: 'absolute' }}
                    />
                </div>
            </div>
        </section>
    );
}