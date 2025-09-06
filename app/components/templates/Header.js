'use client'

import { useEffect, useRef } from 'react';
import logo from '@/assets/images/logo.png';
import russiaFlag from '@/assets/images/russia.png';
import profileIcon from '@/assets/images/profile.png';
import Image from 'next/image';
import regIcon from '@/assets/images/reg.png';
import './Header.css';


export default function Header(props) {
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const burger = document.getElementById('burger');
        const mobileMenu = mobileMenuRef.current;
        const handleBurgerClick = () => {
            mobileMenu.classList.toggle('header__menu--active');
        };
        if (burger && mobileMenu) {
            burger.addEventListener('click', handleBurgerClick);
        }
        return () => {
            if (burger) {
                burger.removeEventListener('click', handleBurgerClick);
            }
        };
    }, []);
    return (
        <header className="header" {...props}>
            <div className="container header__container">
                <a href="#" className="header__logo">
                    <Image src={logo} alt="Tesler Money Logo" />
                </a>

                <nav className="header__nav">
                    <ul className="header__list">
                        <li><a href="#" className="header__link">Продукты</a></li>
                        <li><a href="#" className="header__link">Тарифы</a></li>
                        <li><a href="#" className="header__link">О нас</a></li>
                        <li><a href="#" className="header__link">Помощь</a></li>
                        <li><a href="#" className="header__link">Блог</a></li>
                        <li><a href="#" className="header__link">Контакты</a></li>
                    </ul>
                </nav>

                <div className="header__actions">
                    <button className="header__btn header__btn--flag">
                        <Image src={russiaFlag} alt="Russia Flag" />
                    </button>
                    <button className="header__btn header__btn--login">
                        <Image src={profileIcon} alt="Profile" />
                    </button>
                    <button className="header__btn header__btn--register">
                        регистрация <Image src={regIcon} alt="Registration" />
                    </button>
                </div>

                <button className="header__burger" id="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Выпадающее меню (для мобильного) */}
            <div className="header__menu" id="mobileMenu" ref={mobileMenuRef}>
                <ul className="header__list">
                    <li><a href="#" className="header__link">Продукты</a></li>
                    <li><a href="#" className="header__link">Тарифы</a></li>
                    <li><a href="#" className="header__link">О нас</a></li>
                    <li><a href="#" className="header__link">Помощь</a></li>
                    <li><a href="#" className="header__link">Блог</a></li>
                    <li><a href="#" className="header__link">Контакты</a></li>
                </ul>
                <div className="header__menu--actions">
                    <button className="header__btn header__btn--register">
                        регистрация <Image src={regIcon} alt="Registration" />
                    </button>
                </div>
            </div>
        </header>
    );
};