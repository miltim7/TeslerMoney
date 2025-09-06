'use client'

import level1Icon from '@/assets/images/level1.png';
import level2Icon from '@/assets/images/level2.png';
import level3Icon from '@/assets/images/level3.png';
import level4Icon from '@/assets/images/level4.png';
import phoneLevel from '@/assets/images/phoneLevel.png';
import fonLevel from '@/assets/images/fonLevel.png';
import levelImg from '@/assets/images/level.png';
import Image from 'next/image';
import regIcon from '@/assets/images/reg.png';
import Button from '../ui/Button';
import './LevelSection.css';

export default function LevelSection(props) {
    return (
        <section className="level container" {...props}>
            <h1 className="level__title">Карта <span>Tesler Money</span></h1>
            <p className="level__text">
                Пользуйтесь безопасно по всему Миру<br />
                Откройте для себя новый уровень удобства с услугами
            </p>
            <div className="level__content">
                <div className="level__table">
                    <div className="level__table--item">
                        <div className="level__table--firts-item">
                            <Image loading="eager" width={42} src={level1Icon} alt="Универсальность" />
                            Универсальность и гибкость
                        </div>
                        <div className="level__table--second-item">
                            Для онлайн и офлайн платежей
                        </div>
                    </div>
                    <hr />
                    <div className="level__table--item">
                        <div className="level__table--firts-item">
                            <Image loading="eager" width={42} src={level2Icon} alt="Безопасность" />
                            Безопасность и надежность
                        </div>
                        <div className="level__table--second-item">
                            Надежная защита ваших средств, и быстрые возвраты
                        </div>
                    </div>
                    <hr />
                    <div className="level__table--item">
                        <div className="level__table--firts-item">
                            <Image loading="eager" width={42} src={level3Icon} alt="Международное использование" />
                            Международное использование
                        </div>
                        <div className="level__table--second-item">
                            Платежи 3DS по всему миру
                        </div>
                    </div>
                    <hr />
                    <div className="level__table--item">
                        <div className="level__table--firts-item">
                            <Image loading="eager" width={42} src={level4Icon} alt="Удобное управление" />
                            Удобное управление
                        </div>
                        <div className="level__table--second-item">
                            Управляйте картой через личный кабинет
                        </div>
                    </div>
                    <hr />
                    <div className="level_buttons">
                        <Button
                            variant="level__btn level__btn--primary"
                            icon={regIcon}
                        >
                            заказать карту сейчас
                        </Button>
                        <Button
                            variant="level__btn level__btn--secondary"
                        >
                            Пополнить криптокошелек                       
                            </Button>
                    </div>
                </div>
                <div className="level__image">
                    <div className="level__image--block">
                        <div className="level__image--text">
                            Покупайте, продавайте, отправляйте, получайте и храните криптовалюту в одном удобном приложении
                            или на компьютере. Этот процесс стал максимально простым.
                        </div>
                        <div className="level__image--phone">
                            <Image src={phoneLevel} alt="Phone" />
                        </div>
                        <Image className="level__image--fon" src={fonLevel} alt="Background" />
                    </div>
                    <Image className="level__image--main" src={levelImg} alt="Bank Cards" />
                </div>
            </div>
        </section>
    );
}