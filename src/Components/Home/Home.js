
import HeroSection from '../Home/Hero/Hero';
import WhoweareSection from './Who_we_are/Whoweare';
import Latest from './LatestEvents/Latest';
// import Test from './Testing/test';
import Vendors from './Vendors/Vendors';
import CamNavbar from '../Navbar/Navbar';
import CamChat from '../ChatBot/Chat';
import CamFooter from '../Footer/Footer';


function Home() {
  return (
    <>
    <CamNavbar/>
    <CamChat/>

      <HeroSection />
      <WhoweareSection />
      {/* <Test/> */}
      <Vendors />
      <Latest/>

    <CamFooter/>  

    </>
  );
}

export default Home;