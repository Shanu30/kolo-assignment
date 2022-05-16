import React from "react";
import styles from "./marvel.module.css";

const Search = ({ handleSearch }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
