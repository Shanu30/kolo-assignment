import React from "react";
import styles from './marvel.module.css'

export default function Card({thumbnail,name,id}) {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.img}>
        <img src= {`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name.toUpperCase()}</p>
      </div>
    </div>
  );
}
