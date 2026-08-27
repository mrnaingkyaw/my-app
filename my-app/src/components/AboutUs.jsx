import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
    const navigate = useNavigate();
    return (
        <div className="card" style={{ textAlign: 'left' }}>
            <h1 style={{ textAlign: 'center', color: '#d81b60' }}>About AI Engineering 🤖</h1>
            <p style={{ lineHeight: '1.6', color: '#444' }}>
                An AI engineer is a software professional who builds production-ready 
                applications using pre-trained foundation models and APIs, 
                focusing on system integration, prompt engineering, 
                and RAG pipelines rather than training new machine learning models 
                from scratch.
            </p>
            <h3 style={{ color: '#ff6b8b', marginTop: '20px' }}>What AI Engineers Do:</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Connect large language models (like GPT, Claude, or Gemini) to databases and UIs.</li>
                <li>Build retrieval-augmented generation (RAG) systems and multi-agent workflows.</li>
                <li>Optimize application performance, reduce latency, and manage cost controls.</li>
                <li>Handle deployment, logging, and monitoring through LLMOps practices.</li>
            </ul>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button className="btn-primary" onClick={() => navigate('/')}>
                    ← Back to Home
                </button>
            </div>
        </div>
    );
}

export default AboutUs;