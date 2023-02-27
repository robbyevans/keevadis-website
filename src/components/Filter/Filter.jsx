import React from 'react'
import css from './Filter.module.scss'
import { BiSearchAlt2 } from "react-icons/bi";


function Filter() {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
      
      <div className={css.filter}>
          <h3>Location</h3>
        <select>
              <option value="All">Anywhere</option>
              <option value="fertilizer">Eldoret</option>
              <option value="Herbicide">Kitale</option>
              <option value="pesticide">Nakuru</option>
              <option value="multi-vitamin">Nairobi</option>
              <option value="machinery">Mombasa</option>
        </select>
      </div>
      <div className={css.filter}>
        <h3>Property Type</h3>
        <select >
              <option value="All">All properties</option>
              <option value="fertilizer">Bed sitter</option>
              <option value="Herbicide">Studio Apartment</option>
              <option value="pesticide">1 Bedroom</option>
              <option value="multi-vitamin">2 Bedroom</option>
              <option value="machinery">3 Bedroom</option>
              <option value="machinery">4 Bedroom</option>
              <option value="machinery">Mansionette</option>
        </select>
      </div>

      <div className={css.filter}>
        <h3>Max Price</h3>
        <select>
              <option value="All">Max Price</option>
              <option value="fertilizer">0-10k</option>
              <option value="Herbicide">10k-25k</option>
              <option value="pesticide">25k-50k</option>
              <option value="multi-vitamin">50k-100k</option>
              <option value="machinery">100k+</option>
        </select>
      </div>
      <div><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button></div>
      </div>
    </div>
  )
}

export default Filter