import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingNews.css';
import axios from "axios";
import connections from '../../../config';
import { useTranslation } from 'react-i18next';
import CamNavbar from '../Navbar/Navbar';
import CamChat from '../ChatBot/Chat';
import CamFooter from '../Footer/Footer';

const UpcomingNews = () => {
    const videoRef = useRef(null); // Create a ref for the video element
    const [newsData, setNewsData] = useState([]);
    const [currentVideoLink, setCurrentVideoLink] = useState(null);

    const serverlink = connections.serverLink;

    const handleCloseModal = () => {
        if (videoRef.current) {
            videoRef.current.pause(); // Pause the video
        }
        setCurrentVideoLink(null);
    };

    const handleCardClick = (nlink) => {
        setCurrentVideoLink(nlink);
    };

    useEffect(() => {
        const values = {
            query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE type=1 AND status=1 AND cnt=3;",
            key: "Cr6re8VRBm"
        };

        axios.post(serverlink, values).then((response) => {
            setNewsData(response.data);
        }).catch((err) => {
            console.log(err);
        });

    }, []);

    
    const { t } = useTranslation();
    const { upevnt1, upevnt2, upevnt3, upevnt4, upevnt5
        
        } = t('upEventSec', { returnObjects: true });

    return (
        <>
        <CamNavbar/>
        <CamChat/>
        <div className="upevntainer">
        <div className='row'>
            <div className="row text">
                <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='UpcomingNewsText'>{upevnt1} <br /> {upevnt2}</p></div>
                <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
            </div>
        </div>

        <div className="row cards">
            {newsData.map((news, index) => (
                <div className="col-lg-4" key={index}>
                    <div className="card mb-3 card1 text-light position-relative crd rounded-5" data-bs-toggle="modal" data-bs-target="#videoModal" onClick={() => handleCardClick(news.link)}>
                        <div className="position-relative">
                            {news.image_data ? (
                                <>
                                    <img
                                        src={`data:image/jpeg;base64,${news.image_data}`}
                                        alt={news.title}
                                        className="card-img-top image rounded-top-5 opacity-75" style={{ width: '100%', height: 'auto' }}

                                    />
                                </>
                            ) : (
                                <p>{upevnt3}</p>
                            )}
                            <div className="centered">
                                <Link to="#" className="fa-solid fa-play playicon"></Link>
                            </div>
                        </div>
                        <div className="card-body card1 rounded-top-1 rounded-bottom-5">
                            <div className="row">
                                <h5 className="card-title small-title">{news.title}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Modal */}
        <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true" onClick={handleCloseModal}>
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-upevntent modalClr">
                    <div className="modal-header">
                        <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label={upevnt4}></button>
                    </div>
                    <div className="modal-body">
                        {currentVideoLink && (
                            <iframe
                                width="1100"
                                height="500"
                                src={currentVideoLink}
                                title="Video Player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </div>

    </div>
    <CamFooter/>
    </>
    );
}

export default UpcomingNews;
