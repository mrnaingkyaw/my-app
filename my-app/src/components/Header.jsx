import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <header className="header">
            <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>My App 💕</h1>
            <div className="nav-buttons">
                <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
                <button className="nav-btn" onClick={() => navigate('/about')}>About</button>
                <button className="nav-btn" onClick={() => navigate('/contact')}>Contact</button>
                <button className="nav-btn" onClick={() => navigate('/chat')} style={{ background: '#d81b60', color: 'white' }}>🤖 Chat</button>
            </div>
        </header>
    );
}

export default Header;