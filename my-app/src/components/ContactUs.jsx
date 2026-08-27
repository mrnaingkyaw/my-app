import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // ဒီနေရာမှာ တကယ့် API သို့မဟုတ် Email ပို့တာထည့်လို့ရတယ်။
        // အခုတော့ အောင်မြင်ကြောင်း ပြထားတယ်။
        console.log('Form Data:', formData);
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 5000);
    };

    return (
        <div className="card">
            <span style={{ fontSize: '3rem' }}>💌</span>
            <h1 style={{ color: '#d81b60' }}>Contact Me</h1>
            <p>မက်ဆေ့ချ်ထားခဲ့ရင် တစ်ရက်အတွင်း ပြန်ကြားပေးပါ့မယ်။</p>
            
            <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginTop: '20px' }}>
                <input type="text" name="name" placeholder="နာမည်" value={formData.name} onChange={handleChange} required 
                    style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '12px', border: '1px solid #ffb6c1', boxSizing: 'border-box' }} />
                <input type="email" name="email" placeholder="အီးမေးလ်" value={formData.email} onChange={handleChange} required 
                    style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '12px', border: '1px solid #ffb6c1', boxSizing: 'border-box' }} />
                <textarea name="message" placeholder="ပြောချင်တဲ့စကား..." value={formData.message} onChange={handleChange} required rows="4"
                    style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #ffb6c1', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                    {sent ? '✅ ပို့ပြီးပါပြီ!' : '📤 မက်ဆေ့ချ်ပို့မယ်'}
                </button>
            </form>
            
            <button className="btn-primary" onClick={() => navigate('/')} style={{ marginTop: '15px', background: '#ccc', boxShadow: 'none' }}>
                ← Back to Home
            </button>
        </div>
    );
}

export default ContactUs; // ✅ ထည့်ပေးထားတယ်