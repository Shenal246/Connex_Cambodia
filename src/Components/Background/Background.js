import React from 'react';
import './Background.css'; // Import your CSS file
import { Container } from 'react-bootstrap'; // Import other Bootstrap components

const Background = () => {
    return (
        <div className="background">
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
            <div className="shape shape3"></div>
        </div>
    );
}

export default Background;
