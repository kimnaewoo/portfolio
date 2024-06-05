import AboutMe from '../AboutMe';
import HeroSection from '../HeroSection';
import MyPortFolio from '../MyPortfolio';
import MySkills from '../MySkills';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortFolio />
    </>
  );
}
