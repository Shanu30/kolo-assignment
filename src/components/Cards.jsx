import React from "react";
import { useState, useEffect } from "react";
import styles from "./marvel.module.css";

export default function Cards() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    let res = await fetch(`https://gateway.marvel.com/v1/public/characters?limit=30&apikey=530be097180a0b87c441fd298d5c9350&hash=787872091c09ef8af63feecb77d30fc1&ts=1`);
    let list = await res.json();
    setData(list.data.results);
  };    
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={styles.main}>
        {data.filter((item)=>{
            if(search==="") {
                return item;
            }
            else if(item.name.toLowerCase().includes(search.toLocaleLowerCase())){
                return item;
            }
        })
        .map((item,index) => {
            let path = item.thumbnail.path;
            let extension = item.thumbnail.extension;
            let imgLink = `${path}.${extension}`;
            // console.log(imgLink)
          return (
            <div className={styles.card} key={index}>
                
              <div className={styles.img}>

                <img src={imgLink} alt={item.name} />
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{item.name.toUpperCase()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
