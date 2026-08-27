import React, { useState, useEffect, useRef } from 'react';

function Home() {
    // ပထမဆုံး Default Quote
    const [quote, setQuote] = useState('"Always stay smiling! 🌸" — Unknown');
    const [loading, setLoading] = useState(false);
    
    // Internet မရှိရင် ဒီထဲက အလှည့်ကျ ပြောင်းပြမယ်
    const fallbackIndex = useRef(0);
    const fallbackQuotes = [
        '"အကောင်းဆုံးဖြစ်ဖို့ ကြိုးစားပါ" — Unknown',
        '"ဘဝမှာ ပျော်ရွှင်မှုက အရေးကြီးဆုံး" — Unknown',
        '"ယုံကြည်မှုရှိပါ၊ အောင်မြင်မှုက သင့်နောက်ကိုလိုက်လာမယ်" — Unknown',
        '"ချစ်ခြင်းမေတ္တာက ကမ္ဘာကိုလှည့်ပေးတယ်" — Unknown'
    ];

    const fetchQuote = async () => {
        // ၁။ နှိပ်လိုက်တာနဲ့ Loading ပြမယ် (ဒီအချက်က အရေးကြီးဆုံး)
        setLoading(true);

        try {
            const res = await fetch('https://api.quotable.io/random');
            if (!res.ok) throw new Error('Network error');
            const data = await res.json();
            setQuote(`"${data.content}" — ${data.author}`);
        } catch (error) {
            // ၂။ API မရရင် ကိုယ်ပိုင် Quote စာရင်းထဲက အလှည့်ကျ ယူမယ်
            const currentIndex = fallbackIndex.current;
            setQuote(fallbackQuotes[currentIndex % fallbackQuotes.length]);
            fallbackIndex.current = currentIndex + 1; // နောက်တစ်ခါ နှိပ်ရင် နောက်တစ်ခုပြောင်းမယ်
        } finally {
            // ၃။ ပြီးရင် Loading ဖြုတ်မယ်
            setLoading(false);
        }
    };

    // စမှာ တစ်ခါ အလိုအလျောက် ခေါ်မယ်
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
                {/* ဒီမှာ fetchQuote ကိုပဲ ပြန်ခေါ်ထားတယ် */}
                <button onClick={fetchQuote} className="nav-btn" style={{ marginTop: '10px' }}>
                    🔄 Quote အသစ်ရယူမယ်
                </button>
            </p>
            <p style={{ fontSize: '0.8rem', color: '#aaa', marginTop: '10px' }}>
                * API ကနေ အလိုအလျောက်ဆွဲယူထားတာ (မရရင် ကိုယ်ပိုင် Quote ပြမယ်)
            </p>
        </main>
    );
}

export default Home;