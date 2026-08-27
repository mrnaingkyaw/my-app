import React, { useState, useEffect } from 'react';

function Home() {
    const [quote, setQuote] = useState('Loading...');
    const [loading, setLoading] = useState(true);

    const fetchQuote = async () => {
        try {
            const res = await fetch('https://api.quotable.io/random');
            const data = await res.json();
            setQuote(`"${data.content}" — ${data.author}`);
            setLoading(false);
        } catch (error) {
            setQuote('"Always stay smiling! 🌸" — Unknown');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <main className="card">
            <span style={{ fontSize: '3rem' }}>🌸</span>
            <h1 style={{ color: '#d81b60', marginBottom: '5px' }}>Welcome Home</h1>
            <div style={{ background: '#fff0f3', padding: '20px', borderRadius: '20px', margin: '15px 0', minHeight: '80px' }}>
                <p style={{ fontStyle: 'italic', color: '#555' }}>
                    {loading ? '⏳ စောင့်ပါ...' : quote}
                </p>
            </div>
            <p style={{ lineHeight: '1.6', marginTop: '15px' }}>
                ဒီနေ့အတွက် လှုံ့ဆော်စကားတစ်ခွန်းပါ။ <br />
                <button onClick={fetchQuote} className="nav-btn" style={{ marginTop: '10px' }}>🔄 Quote အသစ်ရယူမယ်</button>
            </p>
            <p style={{ fontSize: '0.8rem', color: '#aaa', marginTop: '10px' }}>
                * API ကနေ အလိုအလျောက်ဆွဲယူထားတာ
            </p>
        </main>
    );
}

export default Home; // ✅ ထည့်ပေးထားတယ်