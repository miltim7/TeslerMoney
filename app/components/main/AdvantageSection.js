'use client'

import Image from 'next/image';
import advantage1 from '@/assets/images/advantage1.png';
import advantage2 from '@/assets/images/advantage2.png';
import advantage3 from '@/assets/images/advantage3.png';
import advantage4 from '@/assets/images/advantage4.png';
import advantage5 from '@/assets/images/advantage5.png';
import './AdvantageSection.css';

export default function AdvantageSection(props) {
    return (
        <section className="advantage container" {...props}>
            <h1 className="advantage__title">Наши преимущества</h1>
            <div className="advantage__content">
                <div className="advantage__item">
                    <div className="advantage__item--block primary">
                        <h1 className="advantage__item--title">Бесплатный счет IBAN</h1>
                        <p className="advantage__item--desc">Ваш персональный европейский счет IBAN доступен сразу после
                            успешной регистрации, даже если вы не являетесь резидентом Европы.</p>
                        <Image src={advantage1} className="advantage__item--img" alt="Advantage" />
                    </div>
                    <div className="advantage__item--block">
                        <h1 className="advantage__item--title">Недорогое ежемесячное обслуживание</h1>
                        <p className="advantage__item--desc">Никаких скрытых платежей и комиссий. С нами выгодно.</p>
                    </div>
                    <div className="advantage__item--block">
                        <h1 className="advantage__item--title">Доставка по всему миру</h1>
                        <p className="advantage__item--desc">В течении рабочего дня после выпуска карты мы отправим ее обычной
                            почтой в любую точку мира.</p>
                        <Image src={advantage2} className="advantage__item--img" alt="Advantage" />
                    </div>
                </div>
                <div className="advantage__item">
                    <div className="advantage__item--block">
                        <h1 className="advantage__item--title">Бесплатная карта международных платежных систем от Tesler Money</h1>
                        <p className="advantage__item--desc">Получите мгновенный доступ к своей виртуальной карте Tesler Money,
                            не дожидаясь пару дней, пока придет ваша пластиковая карта Tesler Money.</p>
                    </div>
                    <div className="advantage__item--block secondary">
                        <h1 className="advantage__item--title">Круглосуточная поддержка клиентов в режиме реального времени</h1>
                        <p className="advantage__item--desc">Лучшая в отрасли поддержка, отвечающая вашим потребностям. Быстро,
                            индивидуально и заботливо — потому что ваша цель — это наша цель.</p>
                        <Image src={advantage3} className="advantage__item--img" alt="Advantage" />
                    </div>
                </div>
                <div className="advantage__item">
                    <div className="advantage__item--block">
                        <h1 className="advantage__item--title">Бесплатный горячий криптокошелек</h1>
                        <p className="advantage__item--desc">Возьмите под контроль более 40 валют на 10 блокчейнах с помощью
                            кошелька, который предлагает все для вашей финансовой свободы.</p>
                        <Image src={advantage4} className="advantage__item--img" alt="Advantage" />
                    </div>
                    <div className="advantage__item--block">
                        <h1 className="advantage__item--title">Платежи SEPA</h1>
                        <p className="advantage__item--desc">У вас есть 3 бесплатных платежа Sepa каждый месяц.</p>
                    </div>
                    <div className="advantage__item--block primary">
                        <h1 className="advantage__item--title">Мобильный и онлайн-банкинг</h1>
                        <p className="advantage__item--desc">Удобный и современный мобильный и онлайн-банкинг также бесплатен.</p>
                        <Image src={advantage5} className="advantage__item--img" alt="Advantage" />
                    </div>
                </div>
            </div>
        </section>
    );
}

