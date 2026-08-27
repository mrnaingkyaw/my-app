import React from "react";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Chat from './components/Chat'; // 🆕 ဒီဟာ ထည့်ပါ
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/chat" element={<Chat />} /> {/* 🆕 ဒီဟာ ထည့်ပါ */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;