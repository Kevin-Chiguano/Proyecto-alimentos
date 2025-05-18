import HeroSection from '../components/HeroSection';
import Mission from '../components/Mission';
import Impact from '../components/Impact';
import Process from '../components/Process';
import CTA from '../components/CTA';
import BackendStatus from '../components/BackendStatus';
import Chatbot from '../components/Chatbot/Chatbot';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Mission />
      <BackendStatus /> 
      <Impact />
      <Process />
      <CTA />
      <Chatbot />
    </>
      // bot 
  );
};

export default HomePage;