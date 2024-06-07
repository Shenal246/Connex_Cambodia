
import HeroSection from '../Home/Hero/Hero';
import WhoweareSection from './Who_we_are/Whoweare';
import Latest from './LatestEvents/Latest';
// import Test from './Testing/test';
import Vendors from './Vendors/Vendors';


function Home() {
  return (
    <>

      <HeroSection />
      <WhoweareSection />
      {/* <Test/> */}
      <Vendors />
      <Latest/>

    </>
  );
}

export default Home;