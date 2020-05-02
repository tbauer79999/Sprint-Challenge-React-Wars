import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cards from "./Cards.js";

function Characters() {
    const [char, setChar] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
            .then(res => {
                setChar(res.data.results)
            })
            .catch(err => {
                console.log(`Data not received ${err}`)
            })
    }, [])
    return (
        <div className = "container">
            {char.map((name, index) => {
                return <Cards name={name} index={index}/>
            })}
        </div>     
    )
}
export default Characters;