import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cards from "./Cards"


function People() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.py4e.com/api/people')
            .then(res => {
                //console.log(res);
                setPeople(res.data.results)
            })
            .catch(err => {
                console.log(`Data not received ${err}`)
            })
    }, [])

    return (
        <div className = "container">
            {people.map((name, index) => {
                return <Cards name={name} index={index}/>
            })}
        </div>     
    )
}


export default People;