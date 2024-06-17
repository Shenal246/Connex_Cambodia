import React from 'react';
import './ServerBackup.css';
import ven1 from '../../../../images/vendorLogos/1.png';
import { useState, useEffect } from 'react';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import connections from '../../../../config';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Server() {
    const [vendors, setVendors] = useState([]);
    const [show, setShow] = useState(false);
    const [currentVendor, setCurrentVendor] = useState(null);
    const navigate = useNavigate();
    const serverlink = connections.serverLink;

    useEffect(() => {
        const values = {
            query: "SELECT name,des,wlink,status,image_data,cnt,Server_Storage_Backup_Solutions FROM Vendor WHERE Server_Storage_Backup_Solutions='true' AND status=1 AND cnt=2;",
            key: "Cr6re8VRBm"
        };

        axios.post(serverlink, values).then((response) => {
            setVendors(response.data);
        }).catch((err) => {
            console.log(err);
        });

        console.log(vendors);

    }, []);

    const handleCardClick = (vend) => {
        navigate(`/Solutions/ServerBackup/${vend.name}`, { state: { vend } });
    };

    const { t } = useTranslation();
    const { svr1, svr2
        } = t('serversec', { returnObjects: true });

    return (
        <section>
            <div className="container">
                <div className='row '>
                    <div className="row text headingrow">
                        <div className="col-3" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        <div className="col-6" data-aos="fade-up" data-aos-delay="100"><p id='topic'>{svr1}</p></div>
                        <div className="col-3" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 rowmargin">

                    {vendors && vendors.map((vend, index) => (
                        <div className="col" key={index}>

                            <div class="card h-100" onClick={() => {  handleCardClick(vend); }}>
                                {vend.image_data ? (
                                    <>
                                        <img
                                            src={`data:image/jpeg;base64,${vend.image_data}`}
                                            alt={vend.title}
                                            className="card-img-top"

                                        />
                                    </>
                                ) : (
                                    <p>{svr1}</p>
                                )}
                                <div class="card-body">
                                    <h5 class="card-title vendorTitel">{vend.name}</h5>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    aria-labelledby="example-custom-modal-styling-title"
                    size='xl'

                >
                    <Modal.Header closeButton closeVariant='white' className='modelHeader'>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {currentVendor && currentVendor.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body scrollable className='btnBody'>
                        <Row>
                            <p>
                                {currentVendor && currentVendor.des}
                            </p>

                        </Row>
                        <Row>
                            <a href={currentVendor && currentVendor.wlink} target='_blank'><Button variant="primary" className='websiteButton'>Visit Website</Button></a>
                        </Row>

                    </Modal.Body>
                </Modal>
            </div>
        </section>
    );
}

export default Server;
