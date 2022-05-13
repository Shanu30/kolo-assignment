import React from 'react'
import {useState, useEffect} from 'react'
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
    <div>
        {data.map((item)=>{
            return(
            <div key= {item.name}>
                <div>
                    <img src={item.thumbnail} alt={item.name}/>
                </div>
                <div>
                    <p>{item.name}</p>
                </div>
            </div>
            )
        })}
    </div>
  )
}
