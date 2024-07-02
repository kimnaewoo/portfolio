import AboutMe from '../AboutMe';
import ContactMe from '../ContactMe';
import HeroSection from '../HeroSection';
import MySkills from '../MySkills';
import Testimonial from '../Testimonials';
import Footer from '../Footer';
import MyPortfolio from '../MyPortfolio';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      {/* <Testimonial /> */}
      <ContactMe />
      <Footer />
    </>
  );
}
