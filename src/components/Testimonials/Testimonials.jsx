import React from 'react'
import css from './Testimonials.module.scss'

function Testimonials() {
  return (
    <div className={css.wrapper} >
      <div className={css.header}>
        <span className={css.secondaryText}>Testimonials</span>
        <span className={css.secondaryText}>This is what our clients are saying</span>
      </div>
      <div className={css.body}>
        <div className={css.card}>
          <span className={css.cardHeader}>Andrea B</span>
          <span className={css.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia tempora amet minus, maiores nostrum quasi ad laudantium libero voluptatem.</span>
        </div>
        <div className={css.card}>
        <span className={css.cardHeader}>Hassan Ali</span>
        <span className={css.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia tempora amet minus, maiores nostrum quasi ad laudantium libero voluptatem.</span>
        </div>
        <div className={css.card}>
        <span className={css.cardHeader}>Job Njoroge</span>
        <span className={css.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia tempora amet minus, maiores nostrum quasi ad laudantium libero voluptatem.</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonials