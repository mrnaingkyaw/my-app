import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();
    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <h2>My Contact page here</h2>
            <button type="button" className="contact-button" onClick={() => navigate('/')}>
                <h2>Back to Home</h2>
            </button>
            
        </div>
    );
}

export default ContactUs;