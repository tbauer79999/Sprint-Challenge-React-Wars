import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Cards";



function Character() {

  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people")
      .then((res) => {
        setCharacter(res.data.results);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [character]);

  return (
    <div>
      {character.map((data) => {
        return <Card character={data} />;
      })}
      ;
    </div>
  );
}


export default Character;