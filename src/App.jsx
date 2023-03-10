import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Filter from './components/Filter/Filter'
import Cardbox from './components/Cardbox/Cardbox'
import './Styles.css'
import Banner from './components/Banner/Banner'
import Featured from './components/Featured/Featured'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Filter/>
      <Cardbox/>
      <Banner/>
      <Featured/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App