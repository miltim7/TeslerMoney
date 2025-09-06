'use client'
import Image from 'next/image';
import important1 from '@/assets/images/important1.png';
import important2 from '@/assets/images/important2.png';
import important3 from '@/assets/images/important3.png';
import regIcon from '@/assets/images/reg.png';
import Button from '@/components/ui/Button';
import './ImportantSection.css';


export default function ImportantSection(props) {
    return (
        <section className="important container" {...props}>
            <div className="important__content">
                <div className="important__table">
                    <div className="important__content">
                        <div>
                            <h1 className="important__title">Сосредоточьтесь на том, что важно для вас</h1>
                            <p className="important__text">
                                Управляйте своими деньгами просто и безопасно. Следите за своими расходами, отправляйте
                                деньги близким, получайте кэшбэк до 5% с покупок и бонусы до 4% годовых на остаток. Это
                                бесплатно!
                            </p>
                        </div>
                        <div className="important_buttons">
                            <Button
                                variant="important__btn important__btn--primary"
                                icon={regIcon}
                            >
                                откройте свой бесплатный аккаунт
                            </Button>
                        </div>
                    </div>
                    <div className="important__content">
                        <div className="important__item--block primary">
                            <Image src={important1} className="important__item--img" alt="Feature" />
                            <h1 className="important__item--title">Интуитивно понятные инструменты</h1>
                            <p className="important__item--desc">Управляйте своим аккаунтом, платежными картами, криптосервисом
                                и всем остальным с помощью суперприложения Tesler Money и через рабочий стол.</p>
                        </div>
                        <div className="important__item--block">
                            <Image src={important2} className="important__item--img" alt="Feature" />
                            <h1 className="important__item--title">Персонализируйте свой пользовательский опыт</h1>
                            <p className="important__item--desc">Управляйте своим аккаунтом, платежными картами, криптосервисом
                                и всем остальным с помощью суперприложения Tesler Money и через рабочий стол.</p>
                        </div>
                        <div className="important__item--block">
                            <Image src={important3} className="important__item--img" alt="Feature" />
                            <h1 className="important__item--title">Мгновенные push-уведомления</h1>
                            <p className="important__item--desc">Получайте мгновенные push-уведомления обо всех действиях по
                                счету, чтобы быть в курсе каждого входящего или исходящего платежа.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};