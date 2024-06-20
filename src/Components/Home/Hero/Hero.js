import './Hero.css';
import Logo from '../../../images/heronew.png';
import React, { useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function HeroSection() {
  const iframeRef = useRef(null); // Create a ref for the iframe element

  const handlePlayVideo = () => {
    if (iframeRef.current) {
      const src = iframeRef.current.src;
      iframeRef.current.src = src + "&autoplay=1"; // Play the video
    }
  };

  const handleCloseModal = () => {
    if (iframeRef.current) {
      const src = iframeRef.current.src;
      iframeRef.current.src = src.replace("&autoplay=1", ""); // Stop the video
    }
  };

  useEffect(() => {
    // Add event listener for modal close
    const modal = document.getElementById('videoModal');
    modal.addEventListener('hidden.bs.modal', handleCloseModal);

    // Cleanup event listener on component unmount
    return () => {
      modal.removeEventListener('hidden.bs.modal', handleCloseModal);
    };
  }, []);

  const { t } = useTranslation();

  const { greet1, greet2first, greet2mid, greet2last, greet3, contact, wtvideo } = t('herosect', { returnObjects: true });

  return (
    <section id="hero" className="section hero">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center cont" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
            <h3 className='settop'>{greet1}</h3>
            <h1>{greet2first}<span className='Connexcon'>{greet2mid}</span>{greet2last}</h1>
            <p>{greet3}</p>

            <div className="row gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <div className="d-flex">
                  <NavLink to="/ContactUs" className="btn-get-started">{contact}</NavLink>
                  {/* <a href="#" className="glightbox btn-watch-video d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#videoModal" onClick={handlePlayVideo}>
                    <i className="bi bi-play-circle"></i>
                    <span>{wtvideo}</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
            <img src={Logo} className="img-fluid animated heroimg" style={{ width: '85%' }} alt="Hero" />
          </div>
          <div className="col-lg-6 order-1 order-lg-2 space"></div>
        </div>
      </div>

      <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content modalClr">
            <div className="modal-header">
              <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <iframe
                className='video'
                src="https://www.youtube.com/embed/FCe1vPuB954?si=5cqHj3a1AtVZqFcN"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                ref={iframeRef}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
