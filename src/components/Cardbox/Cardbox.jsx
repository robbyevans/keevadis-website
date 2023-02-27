import React from 'react'
import css from './Cardbox.module.scss'

function Cardbox() {
  return (
    <div className={css.wrapper}>
      <div className={css.heading}>
        <span className={css.secondaryText} >How it works.</span>
        <span className={css.secondaryText} >This is how our products works</span>
      </div>
      <div className={css.body}>
        <div className={css.card}>
          <img src='./address mark.png'/>
          <span className={css.secondaryText}>Heading</span>
          <span>Story about this heading and why it is important to you as a human being..helloo</span>
        </div>
        <div className={css.card}>
        <img src='./Smart house.png'/>
          <span className={css.secondaryText}>Heading</span>
          <span>Story about this heading and why it is important to you as a human being..helloo</span>
        </div>
        <div className={css.card}>
        <img src='./security.png'/>
          <span className={css.secondaryText} >Heading</span>
          <span>Story about this heading and why it is important to you as a human being..helloo</span>
        </div>
      </div>
    </div>
  )
}

export default Cardbox