import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
    const navigate = useNavigate();
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <h2>My About page here</h2>
            <button type="button" className="about-button" onClick={() => navigate('/')}>
                <h2>Back to Home</h2>
            </button>
            <p>An AI engineer is a software professional who builds production-ready 
                applications using pre-trained foundation models and APIs, 
                focusing on system integration, prompt engineering, 
                and RAG pipelines rather than training new machine learning models 
                from scratch.What AI Engineers DoConnect large language models 
                (like GPT, Claude, or Gemini) to databases, user interfaces, 
                and external tools.Build retrieval-augmented generation (RAG) 
                systems and multi-agent workflows.Optimize application performance, 
                reduce latency, and manage cost controls via caching and efficient API handling.Handle deployment, logging, and monitoring through LLMOps practices.</p>

        </div>
    );
}

export default AboutUs;