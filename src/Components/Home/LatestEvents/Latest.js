import './Latest.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsArrowRight } from 'react-icons/bs';
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { useState, useEffect, useRef } from 'react';
import connections from '../../../config';

const Latest = () => {
    const videoRef = useRef(null);
    const [latestOne, setLatestOne] = useState(null);
    const [latestTwo, setLatestTwo] = useState(null);
    const [latestThree, setLatestThree] = useState(null);
    const [latestFour, setLatestFour] = useState(null);
    const [currentVideoLink, setCurrentVideoLink] = useState(null);

    const serverlink = connections.serverLink;

    const handleCloseModal = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setCurrentVideoLink(null);
    };

    const handleCardClick = (nlink) => {
        setCurrentVideoLink(nlink);
    };

    const fetchNews = async () => {
        // Latest One
        const values = {
            query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE type=3 AND status=1 AND cnt=3;",
            key: "Cr6re8VRBm"
        };

        await axios.post(serverlink, values).then((response) => {
            setLatestOne(response.data[0]);
        }).catch((err) => {
            console.log(err);
        });

        // Latest Two
        const value2 = {
            query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE type=4 AND status=1 AND cnt=3;",
            key: "Cr6re8VRBm"
        };

        axios.post(serverlink, value2).then((response) => {
            setLatestTwo(response.data[0]);
        }).catch((err) => {
            console.log(err);
        });

        // Latest Three
        const value3 = {
            query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE type=5 AND status=1 AND cnt=3;",
            key: "Cr6re8VRBm"
        };

        axios.post(serverlink, value3).then((response) => {
            setLatestThree(response.data[0]);
        }).catch((err) => {
            console.log(err);
        });

        // Latest Four
        const value4 = {
            query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE type=6 AND status=1 AND cnt=3;",
            key: "Cr6re8VRBm"
        };

        axios.post(serverlink, value4).then((response) => {
            setLatestFour(response.data[0]);
        }).catch((err) => {
            console.log(err);
        });

    };

    useEffect(() => {
        fetchNews();
    }, []);

    const { t } = useTranslation();
  const { lattopic } = t('latestsec', { returnObjects: true });

    return (
        <section >
            <div className='container latest'>
                <div className="row gy-3 headingRow" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                    <div className="col-4"><hr /></div>
                    <div className="col-4"><p id='whoweareText'>{lattopic}</p></div>
                    <div className="col-4"><hr /></div>
                </div>

                <div className="row backgrnd" >
                    <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                        {/* first image of the first column */}
                        <div className="mb-2">

                            {/* Card1 */}
                            <div className="cardContainer1 card" data-bs-toggle="modal" data-bs-target="#videoModal3" onClick={() => handleCardClick(latestOne.link)}>
                                {latestOne && latestOne.image_data ? (
                                    <>
                                        <img
                                            src={`data:image/jpeg;base64,${latestOne && latestOne.image_data}`}
                                            alt={latestOne.title}
                                            className='image1'

                                        />
                                    </>
                                ) : (
                                    <p>No Image Available</p>
                                )}

                                <div className="card-body cardBody">

                                    <div className="row">
                                        <h5 className="card-title">{latestOne && latestOne.title}</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* First image of the Second column */}
                    <div className="col-md-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                        <div className='row'>
                            <div className="mb-2">
                                <div className="cardContainer2 card" data-bs-toggle="modal" data-bs-target="#videoModal3" onClick={() => handleCardClick(latestTwo.link)}>
                                    {latestTwo && latestTwo.image_data ? (
                                        <>
                                            <img
                                                src={`data:image/jpeg;base64,${latestTwo && latestTwo.image_data}`}
                                                alt={latestTwo.title}
                                                className='image2'

                                            />
                                        </>
                                    ) : (
                                        <p className='AltText'>No News Available</p>
                                    )}

                                    <div className="card-body cardBody">

                                        <div className="row">
                                            <h5 className="card-title">{latestTwo && latestTwo.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <div className='row'>
                                <div className="col-md-6">
                                    {/* First image of the Second column second row */}
                                    <div className="mb-2">
                                        <div className="cardContainer2 card" data-bs-toggle="modal" data-bs-target="#videoModal3" onClick={() => handleCardClick(latestThree.link)}>
                                            {latestThree && latestThree.image_data ? (
                                                <>
                                                    <img
                                                        src={`data:image/jpeg;base64,${latestThree && latestThree.image_data}`}
                                                        alt={latestThree.title}
                                                        className='image2'

                                                    />
                                                </>
                                            ) : (
                                                <p className='AltText'>No Image Available</p>
                                            )}

                                            <div className="card-body cardBody2">

                                                <div className="row">
                                                    <h5 className="card-title">{latestThree && latestThree.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* Second image of the Second column second row */}
                                    <div className="mb-2">
                                        <div className="cardContainer2 card" data-bs-toggle="modal" data-bs-target="#videoModal3" onClick={() => handleCardClick(latestFour.link)}>
                                            {latestFour && latestFour.image_data ? (
                                                <>
                                                    <img
                                                        src={`data:image/jpeg;base64,${latestFour && latestFour.image_data}`}
                                                        alt={latestFour.title}
                                                        className='image2'

                                                    />
                                                </>
                                            ) : (
                                                <p className='AltText'>No Image Available</p>
                                            )}

                                            <div className="card-body cardBody2">

                                                <div className="row">
                                                    <h5 className="card-title">{latestFour && latestFour.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* See more button */}
                    <div className="col-md-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                        <div className="navigation">
                            <NavLink to="/KH/Events&News"><Button variant="" className='iconsss' style={{ backgroundColor: '#01066B' }}>
                                <BsArrowRight size={30} />
                            </Button></NavLink>

                        </div>
                    </div>

                    {/* Modal */}
                    <div className="modal fade" id="videoModal3" tabIndex="-1" aria-labelledby="videoModal3Label" aria-hidden="true" onClick={handleCloseModal}>
                        <div className="modal-dialog modal-dialog-centered modal-xl">
                            <div className="modal-content modalClr">
                                <div className="modal-header">
                                    <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {currentVideoLink && (
                                        <iframe
                                            width="1100"
                                            height="500"
                                            src={currentVideoLink && currentVideoLink}
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
            </div>
        </section>
    );
}

export default Latest;
