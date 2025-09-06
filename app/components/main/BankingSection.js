'use client'
import Image from 'next/image';
import regIcon from '@/assets/images/reg.png';
import bankingImg from '@/assets/images/banking.png';
import banking1 from '@/assets/images/banking1.png';
import banking2 from '@/assets/images/banking2.png';
import banking3 from '@/assets/images/banking3.png';
import banking4 from '@/assets/images/banking4.png';
import Button from '@/components/ui/Button';
import './BankingSection.css';

export default function BankingSection(props) {
  return (
    <section className="banking container" {...props}>
      <div className="banking__content">
        <div className="banking__table">
          <h1 className="banking__title">Цифровой банкинг для бизнеса</h1>
          <p className="banking__text">
            Откройте счет как физическое лицо и настройте корпоративный счет
            через интернет-банк, чтобы получить доступ ко всем корпоративным функциям.
          </p>
          <div className="banking__content">
            <div className="banking__item">
              <div className="banking__item--block primary">
                <Image src={banking1} className="banking__item--img" alt="Banking feature" />
                <p className="banking__item--desc">Открытие счетов для предприятий из большинства юрисдикций</p>
              </div>
              <div className="banking__item--block">
                <Image src={banking4} className="banking__item--img" alt="Banking feature" />
                <p className="banking__item--desc">Возможность совершать и получать платежи в евро и
                  криптовалюте от клиентов по всему миру</p>
              </div>
            </div>
            <div className="banking__item">
              <div className="banking__item--block">
                <Image src={banking2} className="banking__item--img" alt="Banking feature" />
                <p className="banking__item--desc">Идеально подходит для всех типов компаний (включая
                  регулируемые)</p>
              </div>
              <div className="banking__item--block primary">
                <Image src={banking3} className="banking__item--img" alt="Banking feature" />
                <p className="banking__item--desc">Неограниченное количество счетов и платежных карт для одного
                  бизнеса</p>
              </div>
            </div>
          </div>
          <div className="banking_buttons">
            <Button
              variant="banking__btn banking__btn--primary"
              icon={regIcon}
            >
              стать нашим клиентом
            </Button>
          </div>
        </div>
        <div className="banking__image">
          <Image src={bankingImg} alt="Banking" />
        </div>
      </div>
    </section>
  );
};