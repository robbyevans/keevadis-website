import React from 'react'
import css from './Banner.module.scss'

function Banner() {
  return (
    <div className={css.wrapper}>
      <div className={css.leftside}>
        <img src='/Rectangle 3.png'/>
      </div>
      <div className={css.rightside}>
        <span className={css.primaryText}>Why you should choose us.</span><br/>
        <span className={css.secondaryText}>Creating quality urban lifestyle, building stronger communities</span>
        <div className={css.points}>
          <span className="one">Word class</span>
          <span className="two">Trusted</span>
          <span className="three">Affordable</span>
          <span className="four">Amenities</span>
        </div>
      </div>

    </div>
  )
}

export default Banner