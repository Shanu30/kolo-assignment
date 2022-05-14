import React from 'react'
import styles from './marvel.module.css'

export default function Search({handleSearch}) {
   
  return (
    <div className={styles.search}>
        <input type="text" 
            placeholder="Search..." 
            onChange = {(e)=>{
                handleSearch(e.target.value)
            }}
        />
    </div>
  )
}
