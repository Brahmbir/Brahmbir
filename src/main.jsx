import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CardSection from './Components/cardSection/CardSection'
import Footer from './Components/footer/Footer'
import HeroSection from './Components/heroSection/HeroSection'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroSection />
    <CardSection />
    <Footer />
  </React.StrictMode>,
)
