import React from "react";
import { useState, useEffect } from "react";
import styles from "./marvel.module.css";

export default function Cards() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    let res = await fetch("http://localhost:3000/data");
    let list = await res.json();
    setData(list);
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
          return (
            <div className={styles.card} key={index}>
              <div className={styles.img}>
                <img src={item.thumbnail} alt={item.name} />
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
