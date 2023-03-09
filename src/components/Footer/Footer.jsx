import React from 'react'
import css from './Footer.module.scss'

function Footer() {
  return (
    <div className={css.wrapper} >
      <div className={css.card}>
        <span className={css.secondaryText}>Keevadis</span>
        <span className={css.footerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem blanditiis eum consequatur quo iusto?</span>
      </div>
      <div className={css.card}>
      <span className={css.secondaryText}>Property</span>
      <a href="#">leasing Modules</a>
      <a href="#">Partnership</a>
      <a href="#">Watch demo</a>
      <a href="#">Events</a>
      </div>
      <div className={css.card}>
      <span className={css.secondaryText}>About</span>
        <a href="">Our Company</a>
        <a href="">Carrers</a>
        <a href="">Investors</a>
        <a href="">Social impact</a>
      </div>
      <div className={css.card}>
      <span className={css.secondaryText}>Resources</span>
        <a href="">contact</a>
        <a href="">feedback</a>
        <a href="">system status</a>
        <a href="">private policy</a>
      </div>
    </div>
  )
}

export default Footer