'use client'

import './BusinessSection.css';
import business from '@/assets/images/business.png';
import business1 from '@/assets/images/business1.png';
import business2 from '@/assets/images/business2.png';
import business3 from '@/assets/images/business3.png';
import Image from 'next/image';

export default function BusinessCoin(props) {
    return (
        <section className="business container" {...props}>
            <div className='business__block'>
                <h2>Для частных клиентов</h2>
                <Image loading="lazy" src={business} alt="Card 1" className="business__block--image" />
            </div>
            <div className='business__item'>
                <div className='business__item--block'>
                    <Image loading="lazy" src={business1} alt="Card 1" className="business__item--image" />
                    <p>Легкость открытия счета</p>
                </div>
                <div className='business__item--block'>
                    <Image loading="lazy" src={business3} alt="Card 1" className="business__item--image" />
                    <p>Безопасность</p>
                </div>
                <div className='business__item--block'>
                    <Image loading="lazy" src={business2} alt="Card 1" className="business__item--image" />
                    <p> Удобство</p>
                </div>
            </div>
        </section>
    );
}    