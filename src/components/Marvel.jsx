import React from "react";
import Cards from "./cards/Cards";
import Search from "./search/Search";
import { useState } from "react";

const Marvel = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <Cards search={search} />
    </div>
  );
};

export default Marvel;
