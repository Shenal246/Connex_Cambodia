import React from 'react';
import headlogo from '../../images/about-page-img2.png'
import arrowleft from '../../images/icons8-triangle-64.png'
import './About.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'animate.css';
import card1 from '../../images/map/map trans.png';
import { useTranslation } from 'react-i18next';
import CamNavbar from '../Navbar/Navbar';
import CamChat from '../ChatBot/Chat';
import CamFooter from '../Footer/Footer';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >

        </div>
    );
}

const About = () => {

    const { t } = useTranslation();

    const { ourSTopic, ourSText, ourVTopic, ourVText, ourMTopic, ourMText, sureshName, sureshText, shamalName, shamalText, dilshanName, dilshanText, rohanName, rohanText, rajivName,
        rajivText, patricName, patricText, erangaName, erangaText, jananiName, jananiText, romeshName, romeshText
    } = t('ourstory', { returnObjects: true });


    const data = [
        {
            name: sureshName,
            img: '/quots/Suresh.jpg',
            quote: sureshText,
            post: 'Founder / CEO',
        },
        {
            name: shamalName,
            img: '/quots/Shamal.jpg',
            quote: shamalText,
            post: 'CMO',
        },
        {
            name: dilshanName,
            img: '/quots/Dilshan_Silva.jpg',
            quote: dilshanText,
            post: 'COO',
        },
        {
            name: rohanName,
            img: '/quots/Rohan.jpg',
            quote: rohanText,
            post: 'CTO',
        },
        {
            name: rajivName,
            img: '/quots/Rajiv.jpg',
            quote: rajivText,
            post: 'Director of Connex HQ',
        },
        {
            name: patricName,
            img: '/quots/Patrick_yogarathnam.jpg',
            quote: patricText,
            post: 'CIR',
        },
        {
            name: erangaName,
            img: '/quots/Eranga.jpg',
            quote: erangaText,
            post: 'CRO',
        },
        {
            name: jananiName,
            img: '/quots/Janani_Siriardhane.jpg',
            quote: jananiText,
            post: 'Director of Connex HQ',
        },
        {
            name: romeshName,
            img: '/quots/romesh.jpg',
            quote: romeshText,
            post: 'Director of Connex HQ',
        }

    ];
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <>
            <CamNavbar/>
            <CamChat/>
            <section id='t1'>
                <div class="container classss">
                    <div className='center' data-aos="fade-up" data-aos-delay="200">
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={headlogo} className='headimg'></img>
                            </div>

                            <div className='col-md-6 para'>
                                <div className='story'>
                                    <h1 className='topic'>{ourSTopic}</h1>
                                    <p><br />{ourSText}</p>
                                </div>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-md-6 content'>
                                <div className='story bdround bdround1'>
                                    <h1 className='topic'>{ourVTopic}</h1>
                                    <p><br />{ourVText}</p>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='story bdround bdround2'>
                                    <h1 className='topic'>{ourMTopic}</h1>
                                    <p><br />{ourMText}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section id='t2'>
                <div className='slider'>
                    <Slider {...settings}>

                        {data.map((d) => (<>

                            <div className='sl bdound'>
                                <div class="row">
                                    <div class="col-sm ">
                                        <img src={d.img}></img>
                                    </div>
                                    <div class="col-sm ">
                                        <h3>{d.quote}</h3>
                                        <div>
                                            <h4>{d.name}</h4>
                                            <p>{d.post}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>

                        ))}

                    </Slider>


                </div>





            </section>

            {/* <div className='row imageMap'>
                    <div className='col-4'>

                    </div>
                    <div className='col-4'>
                    <img src={card1} className="map rounded-5 opacity-75 " alt="ConnexIT Logo"  />
                    </div>
                    <div className='col-'>
                        
                    </div>
                    

                </div> */}

            <div className='row imageMap'>
                <div className="row gy-3 text">
                    <div className="col-2" ></div>
                    <div className="col-8" > <img src={card1} className="map rounded-5 opacity-75 " alt="ConnexIT Logo" /></div>
                    <div className="col-2" ></div>
                </div>
            </div>
<CamFooter/>
        </>
        );


}

export default About;