import React from "react";
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import AboutUs from './components/AboutUs'


function App() {
  //const [count, setCount] = useState(0)

  return (
    
    <div className="App">

      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <br></br>
        <Footer />

    </div>

  )
}

export default App
