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
          <img src='./flats.jpg'/>
          <div className={css.cardWrap}>
            <span className={css.secondaryText}>The Palace</span>
            <span>Karen,the place</span>
            <span className={css.left}>Rent: Ksh 35000</span>
          </div>
        </div>
        <div className={css.card}>
        <img src='./mansion01.jpg'/>
          <div className={css.cardWrap}>
            <span className={css.secondaryText}>Ivy Rory</span>
            <span>Kilimani,phase 3</span>
            <span className={css.left}>Rent: Ksh 20000</span>
          </div>
        </div>
        <div className={css.card}>
        <img src='./mansion.jpg'/>
          <div className={css.cardWrap}>
            <span className={css.secondaryText} >Rexona</span>
            <span>Ngong,phase 1<br/></span>
            <span className={css.left}>Rent: Ksh 55000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured