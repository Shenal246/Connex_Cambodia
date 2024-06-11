// import React from 'react';
import './Portal.css';
import { useTranslation } from 'react-i18next';

const Portal = () => {

    const { t } = useTranslation();
    const { ptl1, ptl2
        } = t('portalsec', { returnObjects: true });

    return (
        <>
            <div className='portal'>
                <p><span className='one'>{ptl1}</span><span className='two'> {ptl2}</span> </p>
            </div>
            
        </>
    );
};

export default Portal;
