import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Chat() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'ဟယ်လို! ကျွန်တော် သင့် AI အကူအညီပေးသူပါ။ ဘာမေးချင်လဲ ပြောပါ။ 💕' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        setInput('');
        // ၁။ User Message ကို ချက်ချင်းထည့်လိုက်မယ် (ဒါကြောင့် မျက်နှာပြင်ပေါ် ပေါ်မယ်)
        setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
        setLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage })
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            // ၂။ Bot Reply ကိုထည့်မယ် (data.reply ရှိရင် သုံးမယ်၊ မရှိရင် Fallback)
            setMessages(prev => [...prev, { 
                sender: 'bot', 
                text: data.reply || 'ပြန်ဖြေလို့မရသေးဘူး။ နောက်မှပြန်ကြည့်မယ်။' 
            }]);
        } catch (error) {
            console.error('Fetch Error:', error);
            setMessages(prev => [...prev, { 
                sender: 'bot', 
                text: 'အင်း... Network error ဖြစ်နေတယ်။ နောက်မှပြန်ကြည့်မယ်။' 
            }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="card" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', height: '70vh', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h2 style={{ color: '#d81b60', margin: 0 }}>🤖 AI Chat</h2>
                <button className="nav-btn" onClick={() => navigate('/')} style={{ fontSize: '0.8rem' }}>
                    ✕ ပိတ်မယ်
                </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', paddingRight: '5px', marginBottom: '15px' }}>
                {messages.map((msg, idx) => (
                    <div key={idx} style={{ 
                        display: 'flex', 
                        justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                        marginBottom: '12px'
                    }}>
                        <div style={{
                            maxWidth: '75%',
                            padding: '12px 16px',
                            borderRadius: '18px',
                            backgroundColor: msg.sender === 'user' ? '#d81b60' : '#f1f1f1',
                            color: msg.sender === 'user' ? 'white' : '#333',
                            borderTopRightRadius: msg.sender === 'user' ? '4px' : '18px',
                            borderTopLeftRadius: msg.sender === 'user' ? '18px' : '4px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                            wordBreak: 'break-word'
                        }}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '12px' }}>
                        <div style={{ 
                            padding: '12px 16px', 
                            borderRadius: '18px', 
                            backgroundColor: '#f1f1f1', 
                            color: '#888',
                            borderTopLeftRadius: '4px'
                        }}>
                            <span style={{ display: 'flex', gap: '5px' }}>
                                <span>⏳</span> စဉ်းစားနေတယ်...
                            </span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div style={{ display: 'flex', gap: '10px', borderTop: '1px solid #f0e6e6', paddingTop: '15px' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="မေးစရာရိုက်ထည့်ပါ..."
                    style={{
                        flex: 1,
                        padding: '12px 18px',
                        borderRadius: '25px',
                        border: '1px solid #ffb6c1',
                        outline: 'none',
                        fontSize: '0.95rem',
                        background: 'rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(5px)'
                    }}
                    disabled={loading}
                />
                <button 
                    onClick={sendMessage} 
                    className="btn-primary" 
                    style={{ padding: '12px 24px', borderRadius: '25px', marginTop: 0 }}
                    disabled={loading}
                >
                    {loading ? '⏳' : '📤 ပို့မယ်'}
                </button>
            </div>
            <p style={{ fontSize: '0.7rem', color: '#aaa', textAlign: 'center', marginTop: '10px' }}>
                * API Key မရှိရင် အလိုအလျောက် အတုအယောင်ပြန်ဖြေမယ်
            </p>
        </div>
    );
}

export default Chat;