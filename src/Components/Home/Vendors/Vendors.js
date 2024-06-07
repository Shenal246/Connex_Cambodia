import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper bundle CSS
import { useTranslation } from 'react-i18next';

import './Vendors.css';

// Import your image files
import ven1 from '../../../images/vendorLogos/1.png';
import ven2 from '../../../images/vendorLogos/2.png';
import ven3 from '../../../images/vendorLogos/3.png';
import ven4 from '../../../images/vendorLogos/4.png';
import ven5 from '../../../images/vendorLogos/5.png';
import ven6 from '../../../images/vendorLogos/6.png';
import ven7 from '../../../images/vendorLogos/7.png';
import ven8 from '../../../images/vendorLogos/8.png';
import ven9 from '../../../images/vendorLogos/9.png';
import ven10 from '../../../images/vendorLogos/10.png';
import ven11 from '../../../images/vendorLogos/11.png';
import ven12 from '../../../images/vendorLogos/12.png';
import ven13 from '../../../images/vendorLogos/13.webp';
import ven14 from '../../../images/vendorLogos/14.png';
// Add import statements for all your images here...

const imagePaths = [ven1, ven2, ven3, ven4, ven5, ven6, ven7, ven8, ven9, ven10, ven11, ven12, ven13, ven14]; // Add all your image paths to this array

const Vendors = () => {
  const { t } = useTranslation();
  const { ventopic, venText1, venText2 } = t('vendorsec', { returnObjects: true });

  return (
    <section className='vendors'>
      <div className='container'>
        {/* Vendors Text */}
        <div className="row gy-3" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
          <div className="col-4"><hr /></div>
          <div className="col-4"><p id='ourVendorsText'>{ventopic}</p></div>
          <div className="col-4"><hr /></div>
        </div>

        <div className='row vendorText' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
          <p>{venText1}<br />{venText2}</p>
        </div>

        <div className='row' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
          <div className='col-lg-1'></div>
          <div className='col-lg-10'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              autoplay={{
                delay: 550,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper"
            >
              {imagePaths.map((path, index) => (
                <SwiperSlide key={index}>
                  <div className='image-container'>
                    <img src={path} alt={`ven${index}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-1'></div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;
