import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';
import cambo from '../../images/map/cambo.png';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const formRef = useRef();
    const [isHuman, setIsHuman] = useState(false);
    const recaptchaRef = useRef();

    const onSubmit = async (data) => {
        if (!isHuman) {
            alert('Please verify that you are a human!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/send-email', data);
            console.log(response.data);
            reset();
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleRecaptchaChange = (value) => {
        setIsHuman(!!value);
    };

    const { t } = useTranslation();
    const { cont1, cont2, cont3, cont4, cont5, cont6, cont7,
        cont8, cont9, cont10, cont11, cont12, cont13, cont14, cont15, cont16,
        cont17, cont18, cont19, cont20, cont21, cont22, cont23, cont24, cont25,
        cont26, cont27, cont28, cont29, cont30
    } = t('contsec', { returnObjects: true });

    return (
        <div className="container">
            <div className='row'>
                <div className="row gy-3 text mb-4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                    <div className="col-md-4"><hr /></div>
                    <div className="col-md-4"><p id='Text'>{cont1}</p></div>
                    <div className="col-md-4"><hr /></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                    <h1 className='h1'>{cont2}<br /> {cont3}</h1>
                    <h2 className='h2'>{cont4}<br /> {cont5} <br />{cont6} <br /> {cont7}</h2>
                </div>
                <div className="col-md inputField" data-aos="fade-down" dat a-aos-duration="1000" data-aos-delay="50">
                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating col-md-mb-2">
                            <div className="row mt-4 mb-2">
                                <div className="col-md mb-2">
                                    <input
                                        type="text"
                                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                        placeholder={cont8}
                                        aria-label={cont8}
                                        {...register('firstName', { required: true })}
                                    />
                                    {errors.firstName && <span className="text-danger">{cont9}</span>}
                                </div>
                                <div className="col-md">
                                    <input
                                        type="text"
                                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                        placeholder={cont10}
                                        aria-label={cont10}
                                        {...register('lastName', { required: true })}
                                    />
                                    {errors.lastName && <span className="text-danger">{cont11}</span>}
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md mb-2">
                                    <input
                                        type="text"
                                        className={`form-control ${errors.Company ? 'is-invalid' : ''}`}
                                        placeholder={cont12}
                                        aria-label={cont12}
                                        {...register('Company', { required: true })}
                                    />
                                    {errors.Company && <span className="text-danger">{cont13}</span>}
                                </div>
                                <div className="col-md">
                                    <input
                                        type="text"
                                        className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                                        placeholder={cont14}
                                        aria-label={cont14}
                                        {...register('contactNumber', {
                                            required: true,
                                            pattern: {
                                                value: /^[0-9]+$/,
                                                message: { cont15 },
                                            },
                                            validate: {
                                                length: (value) => value.length === 10 || { cont15 },
                                            },
                                        })}
                                    />
                                    {errors.contactNumber && <span className="text-danger">{errors.contactNumber.message || 'Contact number is required'}</span>}
                                </div>
                            </div>
                        </div>

                        <div className="col-md mb-3">
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="floatingInput"
                                placeholder={cont16}
                                {...register('email', {
                                    required: true,
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        message: { cont17 },
                                    },
                                })}
                            />
                            {errors.email && <span className="text-danger">{errors.email.message || 'Email is required'}</span>}
                        </div>

                        <div className="col-md">
                            <textarea
                                className={`form-control txtarea ${errors.comments ? 'is-invalid' : ''}`}
                                placeholder={cont30}
                                id="floatingTextarea2"
                                {...register('comments', { required: true })}
                            ></textarea>
                            {errors.comments && <span className="text-danger"> {cont18}</span>}
                        </div>

                        <div className="form-check formcheck">
                            <input
                                className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
                                type="checkbox"
                                id="flexCheckDefault"
                                {...register('acceptTerms', { required: true })}
                            />
                            <label className="form-check-label tikBox" htmlFor="flexCheckDefault">
                                {cont19}
                            </label>
                            {errors.acceptTerms && <span className="text-danger"> {cont20}</span>}
                        </div>

                        <div className="mt-3">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                onChange={handleRecaptchaChange}
                            />
                        </div>
                        <div className="row mt-4 btnContainer">
                            <div className="col-md-6 mb-2">
                                <button type="submit" className="btn btn-success">{cont21}</button>
                            </div>
                            <div className="col-md-6">
                                <button type="reset" className="btn btn-danger" onClick={() => reset()}>{cont22}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 countryData">
                    <h1 className='countryName address3'>{cont23}</h1>
                    <h3>{cont24}</h3>
                    <p className='txt1'><i className="fas fa-map-marker-alt img3"></i>
                        {cont25}<br />
                        <span className='address'>{cont26}</span><br />
                        <span className='address'>{cont27}</span><br />
                        <span className='address'>{cont28}</span>
                    </p>
                    <button
                        className="neon-button"
                        onClick={() => window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.537063489868!2d104.91642621180816!3d11.54222489236825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310956d2a2d70f1d%3A0xea84a6a9241db2f6!2sMorgan%20Tower!5e0!3m2!1sen!2slk!4v1718103352142!5m2!1sen!2slk')}
                    >
                        {cont29}
                    </button>
                    <hr className='line'></hr><hr className='line'></hr>
                </div>
                <div className="col-md-6">
                    <img src={cambo} className='cambo' />

                </div>
            </div>
        </div>
    );
}

export default Contact;
