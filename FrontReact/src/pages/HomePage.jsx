import HeroSection from '../components/HeroSection';
import Mission from '../components/Mission';
import Impact from '../components/Impact';
import Process from '../components/Process';
import CTA from '../components/CTA';
import BackendStatus from '../components/BackendStatus';

import Blogs from '../components/Blogs';//



const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Mission />
      <BackendStatus /> 
      <Impact />
      <Process />
      <CTA />
      <Blogs />
    </>
  );
};

export default HomePage;