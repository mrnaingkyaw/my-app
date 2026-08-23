import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    return (
        <header className="header">
            <h1>My App is here</h1>
            <button type="button" className="about-button" onClick={() => navigate('/about')}>
                <h2>About Us</h2>
            </button>
            <button type="button" className="contact-button" onClick={() => navigate('/contact')}>
                <h2>Contact Us</h2>
            </button>
        </header>
    );
}

export default Header;