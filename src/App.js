
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Chat from './Components/ChatBot/Chat';
// import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';
import AOS from 'aos';


function App() {
 
  AOS.init();

  return (

    <>
      {/* <Topbar /> */}
      <Navbar />
      {/* <Chat/>

      <Footer /> */}
    </>

  );
}


export default App;
