import React from "react";
import { useState, useEffect } from "react";
import styles from "./cards.module.css";
import Card from "../card/Card";

const Cards = ({ search }) => {
  const [character, setCharacter] = useState([]);
  const [error, setError] = useState("");

  const getMarvelCharacters = async () => {
    let res = await fetch(
      `https://gateway.marvel.com/v1/public/characters?limit=30&apikey=530be097180a0b87c441fd298d5c9350&hash=787872091c09ef8af63feecb77d30fc1&ts=1`
    );
    let val = await res.json();
    try {
      setCharacter(val.data.results);
    } catch (err) {
      setError(val.message);
    }
  };

  useEffect(() => {
    getMarvelCharacters();
  }, []);

  return (
    <div className={styles.main}>
      {error === "" ? (
        character
          .filter((item) => {
            if (search === "") {
              return item;
            }
            if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })
          .map((item) => {
            return (
              <Card id={item.id} thumbnail={item.thumbnail} name={item.name} />
            );
          })
      ) : (
        <h2>{`unable to fetch details from marvel: ${error}`}</h2>
      )}
    </div>
  );
};

export default Cards;
