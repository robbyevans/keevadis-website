import React from 'react'
import css from './Cardbox.module.scss'

function Cardbox() {
  return (
    <div className={css.wrapper}>
      <div className={css.heading}>
        <span className={css.secondaryText} >How it works.</span>
        <span className={css.secondaryText} >This is how our service works</span>
      </div>
      <div className={css.body}>
        <div className={css.card}>
          <img src='./address mark.png'/>
          <span className={css.secondaryText}>Locate</span>
          <span>Locate your ideal property of your choice faster </span>
        </div>
        <div className={css.card}>
        <img src='./Smart house.png'/>
          <span className={css.secondaryText}>Reach out </span>
          <span>send a message to our agent with the property you are interested and let us call you</span>
        </div>
        <div className={css.card}>
        <img src='./security.png'/>
          <span className={css.secondaryText} >Get the key</span>
          <span>View the property and Seal the deal </span>
        </div>
      </div>
    </div>
  )
}

export default Cardbox