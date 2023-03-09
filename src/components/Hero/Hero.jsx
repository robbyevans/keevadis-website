import React from 'react'
import css from './Hero.module.scss'
// import '../../Global.module.scss'

function Hero() {
  return (
    <div className={` ${css.wrapper}`}>
      {/* left-side */}
      <div className={`   ${css.leftside}`}>
        <span className={css.primaryText}>Find the perfect place for you. Buy,Rent or<br/> sell.</span><br/>
        <span className={`  ${css.secondaryText}`}>Bedsitter, Studio, one, two, three bedroom or mansionette for your extended family are a click away.<br/>Explore: </span>
        <div className={css.action}>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Learn more</button>
        <img src='./Group 1.png'/>
        </div>
      </div>

      {/* right-side */}
      <div className={css.rightside}>
        <img src='./keevadis.jpg'/>
        {/* <img src='./Ellipse 3.png'/> */}
      </div>
    </div>
  )
}

export default Hero