import React from 'react'
import css from './Banner.module.scss'
import { FiCheckSquare } from 'react-icons/fi';

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
          <span className="one"><FiCheckSquare className='text-indigo-700 mr-2'/>Word class </span>
          <span className="two"><FiCheckSquare className='text-indigo-700 mr-2'/>Trusted</span>
          <span className="three"><FiCheckSquare className='text-indigo-700 mr-2'/>Affordable</span>
          <span className="four"><FiCheckSquare className='text-indigo-700 mr-2'/>Amenities</span>
        </div>
      </div>

    </div>
  )
}

export default Banner