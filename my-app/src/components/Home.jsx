import React from 'react';

function Home() {
    return (
        <main className="card">
            <span style={{ fontSize: '3rem' }}>🌸</span>
            <h1 style={{ color: '#d81b60', marginBottom: '5px' }}>Welcome Home</h1>
            <h3 style={{ color: '#666', fontWeight: '400' }}>Always Stay Smiling ✨</h3>
            <p style={{ lineHeight: '1.6', marginTop: '15px' }}>
                Welcome to my special app space. Built with love and React! 
                Feel free to explore the pages using the menu above.
            </p>
        </main>
    );
}

export default Home;