'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import profileCircle from '@/assets/images/profile-circle.png';
import stars from '@/assets/images/stars.png';
import arrowRight from '@/assets/images/arrow-right.png';
import './ReviewsSection.css';

export default function ReviewsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesRef = useRef([]);
  
    useEffect(() => {
      const slides = document.querySelectorAll('.slide');
      slidesRef.current = slides;
      updateSlides();
    }, []);
  
    const updateSlides = () => {
      slidesRef.current.forEach((slide, index) => {
        slide.classList.remove('active', 'prev', 'next');
  
        if (index === currentSlide) {
          slide.classList.add('active');
        } else if (index === (currentSlide - 1 + slidesRef.current.length) % slidesRef.current.length) {
          slide.classList.add('prev');
        } else if (index === (currentSlide + 1) % slidesRef.current.length) {
          slide.classList.add('next');
        }
      });
    };
  
    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % slidesRef.current.length);
      updateSlides();
    };
  
    const prevSlide = () => {
      setCurrentSlide((currentSlide - 1 + slidesRef.current.length) % slidesRef.current.length);
      updateSlides();
    };
  
    return (
      <section className="reviews container">
        <div className="reviews__content">
          <h1 className="reviews__title">Отзывы наших клиентов</h1>
          <div className="reviews__slider">
            <div className="slider">
              <div className="slide active">
                <Image className="slide__image" src={profileCircle} alt="Profile" />
                <h1>Username</h1>
                <p>Lörem ipsum trirusav previvis. Debör ak orade fastän bisås hypon, inte nöde: och mubott i
                  sav. Tåment ökönar, kil plaroktig. Spepos gigang, gossade, tessade, onera: huruvida tetrang
                  hevagyvis. Nåsk gydeling alltså nåra polyrar köns.</p>
                <Image src={stars} alt="Stars" />
              </div>
              <div className="slide next">
                <Image className="slide__image" src={profileCircle} alt="Profile" />
                <h1>Second</h1>
                <p>Lörem ipsum trirusav previvis. Debör ak orade fastän bisås hypon, inte nöde: och mubott i
                  sav. Tåment ökönar, kil plaroktig. Spepos gigang, gossade, tessade, onera: huruvida tetrang
                  hevagyvis. Nåsk gydeling alltså nåra polyrar köns.</p>
                <Image src={stars} alt="Stars" />
              </div>
              <div className="slide">
                <Image className="slide__image" src={profileCircle} alt="Profile" />
                <h1>Third</h1>
                <p>Lörem ipsum trirusav previvis. Debör ak orade fastän bisås hypon, inte nöde: och mubott i
                  sav. Tåment ökönar, kil plaroktig. Spepos gigang, gossade, tessade, onera: huruvida tetrang
                  hevagyvis. Nåsk gydeling alltså nåra polyrar köns.</p>
                <Image src={stars} alt="Stars" />
              </div>
              <div className="slide">
                <Image className="slide__image" src={profileCircle} alt="Profile" />
                <h1>Again</h1>
                <p>Lörem ipsum trirusav previvis. Debör ak orade fastän bisås hypon, inte nöde: och mubott i
                  sav. Tåment ökönar, kil plaroktig. Spepos gigang, gossade, tessade, onera: huruvida tetrang
                  hevagyvis. Nåsk gydeling alltså nåra polyrar köns.</p>
                <Image src={stars} alt="Stars" />
              </div>
              <div className="slide prev">
                <Image className="slide__image" src={profileCircle} alt="Profile" />
                <h1>O my god</h1>
                <p>Lörem ipsum trirusav previvis. Debör ak orade fastän bisås hypon, inte nöde: och mubott i
                  sav. Tåment ökönar, kil plaroktig. Spepos gigang, gossade, tessade, onera: huruvida tetrang
                  hevagyvis. Nåsk gydeling alltså nåra polyrar köns.</p>
                <Image src={stars} alt="Stars" />
              </div>
            </div>
            <div className="reviews__slider--indicators">
              <div className="arrow left" onClick={prevSlide}>
                <Image src={arrowRight} alt="Previous" />
              </div>
              <div className="arrow right" onClick={nextSlide}>
                <Image src={arrowRight} alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };