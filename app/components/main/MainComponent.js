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

const Home = () => {
'use client';
  return (
    <>
      <Hero />
      <LevelSection />
      <AdvantageSection  />
      <NowSection data-robot="А вот здесь расскажем о достижениях" />
      <AboutSection />
      <FaqSection />
      <AppSection />
      <ImportantSection  data-robot="А вот здесь расскажем о текущей обстановки"  />
      <BankingSection />
      <ReviewsSection />
      <RobotAssistant />
    </>
  );
};

export default Home;