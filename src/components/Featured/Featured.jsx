import React from 'react'
import css from './Featured.module.scss'

function Featured() {
  return (
    <div className={css.wrapper}>
            <div className={css.heading}>
        <span className={css.secondaryText} >Our Featured Properties.</span>
        <span className={css.secondaryText} >One of our biggest product to be featured and that has sold out the most</span>
      </div>
      <div className={css.body}>
        <div className={css.card}>
          <img src='./Rectangle 4.png'/>
          <span className={css.secondaryText}>The Palace</span>
          <span>Karen,the place</span>
        </div>
        <div className={css.card}>
        <img src='./Rectangle 4 (1).png'/>
          <span className={css.secondaryText}>Ivy Rory</span>
          <span>Kilimani,phase 3</span>
        </div>
        <div className={css.card}>
        <img src='./Rectangle 4 (2).png'/>
          <span className={css.secondaryText} >Rexona</span>
          <span>Ngong,phase 1</span>
        </div>
      </div>
    </div>
  )
}

export default Featured