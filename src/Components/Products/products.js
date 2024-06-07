import React, { useState } from 'react';
import './products.css';
import card1 from '../../images/news.png';
import Card from 'react-bootstrap/Card';

function Products() {
    const [selectedVendor, setSelectedVendor] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');

    const handleVendorChange = (event) => {
        setSelectedVendor(event.target.value);
    };

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    return (
        <section>
            <div className="container">
                <div className='row '>
                    <div className="row text headingrow">
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='topic'>Products</p></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    </div>
                </div>

                <div className='row '>
                    <div className="col-4">
                        <select className="form-select" aria-label="Default select example" onChange={handleVendorChange}>
                            <option value="" selected>Search By Vendors</option>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                        </select>
                    </div>

                    <div className="col-4">

                    </div>

                    <div className="col-4">
                        <select className="form-select" aria-label="Default select example" onChange={handleProductChange}>
                            <option value="" selected>Search By Products</option>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                        </select>
                    </div>
                </div>

                <div className="row cards">

                    {/* first card */}
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }} className='m-3'>
                            <img src={card1} className="opacity-75 productImage" alt="ConnexIT Logo" style={{ width: '100%', height: 'auto' }} />
                            <Card.Body className='CBody'>
                                <Card.Title>Product Name</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                </div>


            </div>
        </section>
    );
}

export default Products;
