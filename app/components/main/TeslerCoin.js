'use client'

import nowImg from '@/assets/images/TeslerCoin.png';
import Image from 'next/image';
import './TeslerCoin.css';

export default function TeslerCoin(props) {
    return (
        <section className="tesler container" {...props}>
            <div className="tesler__block">
                <h1 className="tesler__title">TeslerCoin</h1>
                <p className="tesler__text">
                    Обменивайте рубли и евро по выгодному курсу уверенно и безопасно!
                </p>
            </div>
            <Image src={nowImg} alt="Tesler Money" />
        </section>
    );
}   