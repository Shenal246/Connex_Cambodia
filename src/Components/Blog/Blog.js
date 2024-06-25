import React, { useState } from 'react';
import './Blog.css'; // Import your CSS file
import { Modal, Button } from 'react-bootstrap'; // Import other Bootstrap components
import blog from '../../images/Blogs/blogging-services.jpg';
import { useTranslation } from 'react-i18next';
import CamNavbar from '../Navbar/Navbar';
import CamChat from '../ChatBot/Chat';
import CamFooter from '../Footer/Footer';

const Blog = () => {
    const [lgShow, setLgShow] = useState(false);
    const { t } = useTranslation();
    const { blg1
        } = t('blogsec', { returnObjects: true });


    return (
        
        <>
        <CamNavbar/>
        <CamChat/>
        <section>
            <div className="container">
                <div className='row '>
                    <div className="row text headingrow">
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='topic'>{blg1}</p></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    </div>
                </div>

                <div className='row '>
                    <div className="col">
                        <div className="card mb-3 cards2">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={blog} className="img-fluid rounded-start blogimg" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Why SMBs Can Finally Breathe Easy: Palo Alto Networks NGFWs Now Within Reach</h3>
                                        <br />
                                        <h5 className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Sudu parawi raana see piyasalaaa, pasala nimawee yowun kumariyannn</h5>
                                        <button className="btn btn-info read-more" onClick={() => setLgShow(true)}>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for detailed blog content */}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                className='modal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body> Lorem ipsum sdjvcaevhue  u hohv 0f b  j veodejobvej0dvf of0jg nrojv ojvewrjvde fbvojco jjowjpvwdjvbvjovn jrbvoj onbovr 4job kdnrlh rpc fno vpb fnk mnpkv knnnnnnnnnnnnnnnnn n nnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnn nnnnnnnnnnnnnn nnnnnnnnnnnnnnnnn  </Modal.Body>
            </Modal>
        </section>
        <CamFooter/>
        </>
    );
}

export default Blog;
