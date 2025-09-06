'use client'

import nowImg from '@/assets/images/now.png';
import Image from 'next/image';
import './NowSection.css';

export default function NowSection(props) {
    return (
        <section className="now container" {...props}>
            <div className="now__block">
                <h1 className="now__title">Начните использовать <span>Tesler Money</span> уже сегодня</h1>
                <p className="now__text">
                    Зарегистрируйтесь в Tesler Money и получите доступ
                    к инновационным финансовым услугам. Наслаждайтесь удобными и безопасными платежами, пополнениями
                    и выводами средств.
                </p>
            </div>
            <Image src={nowImg} alt="Tesler Money" />
        </section>
    );
}