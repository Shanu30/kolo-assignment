import React from 'react'
import {useState, useEffect} from 'react'
import styles from './marvel.module.css'
import Card from './Card'


export default function Cards({search}) {
    const [character, setCharacter] = useState([])
    const getData = async() => {
        let res = await fetch(`https://gateway.marvel.com/v1/public/characters?limit=30&apikey=530be097180a0b87c441fd298d5c9350&hash=787872091c09ef8af63feecb77d30fc1&ts=1`)
        let val = await res.json()
        setCharacter(val.data.results)
    }   
    useEffect(() => {
        getData()
    }, [])
  return (
    <div className={styles.main} >
        {character.filter((item) => {
            if(search==="") {
                return item;
            }
            else if(item.name.toLowerCase().includes(search.toLowerCase())){
                return item;
            }
        })
        .map((item)=>{
            
            return(
                <Card 
                    id = {item.id}
                    thumbnail={item.thumbnail} 
                    name={item.name} 
                />
            )
        })}
    </div>
  )
}
