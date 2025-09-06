'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import app1 from '@/assets/images/app1.png';
import app2 from '@/assets/images/app2.png';
import app3 from '@/assets/images/app3.png';
import app4 from '@/assets/images/app4.png';
import app5 from '@/assets/images/app5.png';
import app6 from '@/assets/images/app6.png';
import './AppSection.css';

export default function AppSection(props) {
  useEffect(() => {
    // Автоматическая прокрутка слайдера
    const sliderTrack = document.querySelector('.app__slider--track');
    if (sliderTrack) {
      let position = 0;
      const speed = 1;

      const animate = () => {
        position -= speed;
        if (position < -sliderTrack.scrollWidth / 2) {
          position = 0;
        }
        sliderTrack.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <section className="app container" {...props}>
      <div className="app__block">
        <h1 className="app__title">Что Вы сможете оплатить картой <span>Tesler Money</span></h1>
      </div>
      <div className="app__slider">
        <div className="app__slider--track">
          <div className="app__slider--content">
            <Image src={app1} alt="Brand 1" />
            <Image src={app2} alt="Brand 2" />
            <Image src={app3} alt="Brand 3" />
            <Image src={app4} alt="Brand 4" />
            <Image src={app5} alt="Brand 5" />
            <Image src={app6} alt="Brand 6" />
          </div>
          <div className="app__slider--content">
            <Image src={app1} alt="Brand 1" />
            <Image src={app2} alt="Brand 2" />
            <Image src={app3} alt="Brand 3" />
            <Image src={app4} alt="Brand 4" />
            <Image src={app5} alt="Brand 5" />
            <Image src={app6} alt="Brand 6" />
          </div>
        </div>
      </div>
    </section>
  );
};