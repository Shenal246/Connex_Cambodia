// import React from 'react';
import './Portal.css';
import { useTranslation } from 'react-i18next';
import CamNavbar from '../Navbar/Navbar';
import CamChat from '../ChatBot/Chat';
import CamFooter from '../Footer/Footer';

const Portal = () => {

    const { t } = useTranslation();
    const { ptl1, ptl2
        } = t('portalsec', { returnObjects: true });

    return (
        <>
        <CamNavbar/>
        <CamChat/>
            <div className='portal'>
                <p><span className='one'>{ptl1}</span><span className='two'> {ptl2}</span> </p>
            </div>
        <CamFooter/>    
        </>
    );
};

export default Portal;
