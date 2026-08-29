import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS ဖိုင်ကို မဖြစ်မနေ ထည့်ပေးရပါမယ်

function ContactUs() {
    // ခလုတ်နှိပ်လိုက်ရင် ပေါ်လာမယ့် စာလေးကို ဒီမှာရေးပါမယ်
    const showNotification = () => {
        toast.success("Thank you! Your message was sent. 💖", {
            position: "top-center", // အပေါ် အလယ်တည့်တည့်မှာ ပေါ်ပါမယ်
            autoClose: 3000, // ၃ စက္ကန့် (3000ms) နေရင် အလိုလိုပျောက်သွားပါမယ်
        });
    };

    return (
        <div className="card">
            <span style={{ fontSize: '3rem' }}>💌</span>
            <h1 style={{ color: '#d81b60' }}>Contact Me</h1>
            <p style={{ lineHeight: '1.6' }}>
                Have a message or want to connect? Reach out anytime!
            </p>
            <button className="btn-primary" onClick={showNotification}>
                Send Message 💌
            </button>
            
            {/* Notification တွေကို အလုပ်လုပ်စေမယ့် Container ပါ */}
            <ToastContainer />
        </div>
    );
}

export default ContactUs;