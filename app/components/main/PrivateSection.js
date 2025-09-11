'use client'

import './PrivateSection.css';
import privateimg from '@/assets/images/private.png';
import privateimg1 from '@/assets/images/private1.png';
import privateimg2 from '@/assets/images/private2.png';
import privateimg3 from '@/assets/images/private3.png';
import privateimg4 from '@/assets/images/private4.png';
import Image from 'next/image';

export default function BusinessCoin(props) {
    return (
        <section className="private container" {...props}>
            <div className='private__block'>
                <h2>Для бизнес клиентов</h2>
                <Image loading="lazy" src={privateimg} alt="Card 1" className="private__block--image" />
            </div>
            <div className='private__item'>
                <div className='private__item--block'>
                    <Image loading="lazy" src={privateimg1} alt="Card 1" className="private__item--image" />
                    <p>Эксклюзивные условия</p>
                </div>
                <div className='private__item--block'>
                    <Image loading="lazy" src={privateimg2} alt="Card 1" className="private__item--image" />
                    <p>Безопасность и удобство</p>
                </div>
                <div className='private__item--block'>
                    <Image loading="lazy" src={privateimg3} alt="Card 1" className="private__item--image" />
                    <p>Минимум документов</p>
                </div>
                <div className='private__item--block'>
                    <Image loading="lazy" src={privateimg4} alt="Card 1" className="private__item--image" />
                    <p>Скорость платежей</p>
                </div>
            </div>
        </section>
    );
}    