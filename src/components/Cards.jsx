import React from 'react'
import {useState, useEffect} from 'react'
import styles from './marvel.module.css'

export default function Cards() {
    const [data, setData] = useState([])
    const getData = async() => {
        let res = await fetch("http://localhost:3000/data")
        let list = await res.json()
        setData(list)
    }
    useEffect(() =>{
        getData()
    },[])
    console.log(data)
  return (
    <div className={styles.main}>
        {data.map((item)=>{
            return(
            <div className={styles.card} key= {item.name}>
                <div className={styles.img}>
                    <img src={item.thumbnail} alt={item.name}/>
                </div>
                <div className={styles.info}>
                    <p className={styles.name}>{item.name}</p>
                </div>
            </div>
            )
        })}
    </div>
  )
}
