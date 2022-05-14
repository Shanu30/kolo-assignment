import React from "react";
import styles from './marvel.module.css'

export default function Card({thumbnail,name,id}) {
    let path = thumbnail.path;
    let extension = thumbnail.extension;
    let imgLink = `${path}.${extension}`;
  return (
    <div className={styles.card} key={id}>
      <div className={styles.img}>
        <img src={imgLink} alt={name} />
      </div>
      <div className={styles.info}>
        <p className={styles.name.toUpperCase()}>{name}</p>
        {/* <div className={styles.corner}></div> */}
      </div>
    </div>
  );
}
