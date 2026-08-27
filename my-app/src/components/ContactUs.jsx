import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();
    return (
        <div className="card">
            <span style={{ fontSize: '3rem' }}>💌</span>
            <h1 style={{ color: '#d81b60' }}>Contact Me</h1>
            <p style={{ lineHeight: '1.6' }}>
                Have a message or want to connect? Reach out anytime!
            </p>
            <div style={{ background: '#fff0f3', padding: '15px', borderRadius: '15px', margin: '20px 0' }}>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#d81b60' }}>
                    "Always here for you!" 💖
                </p>
            </div>
            <button className="btn-primary" onClick={() => navigate('/')}>
                ← Back to Home
            </button>
        </div>
    );
}

export default ContactUs;