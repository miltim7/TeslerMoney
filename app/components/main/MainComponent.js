'use client';
import AboutSection from './AboutSection';
import BankingSection from './BankingSection';
import FaqSection from './FaqSection';
import AppSection from './AppSection';
import ImportantSection from './ImportantSection';
import ReviewsSection from './ReviewsSection';
import LevelSection from './LevelSection';
import AdvantageSection from './AdvantageSection';
import NowSection from './NowSection';
import Hero from './Hero';
import RobotAssistant from '../ui/RobotAssistant';
import TeslerCoin from './TeslerCoin';
import BusinessSection from './BusinessSection';
import PrivateSection from './PrivateSection';

const Home = () => {
  'use client';
  return (
    <>
      <Hero />
      <LevelSection />
      <AdvantageSection />
      <BusinessSection data-robot="Хотите ли вы открыть счет для физического лица? Могу предожить Вам приватные условия" />
      <PrivateSection data-robot="Вы занимаетесь бизнесом? У меня есть для Вас эксклюзтвное бизнес предложение!" />
      <NowSection  />
      <AboutSection />
      <AppSection />
      <ImportantSection  />
      <BankingSection />
      <TeslerCoin />
      <FaqSection />
      <ReviewsSection />
      <RobotAssistant />
    </>
  );
};

export default Home;