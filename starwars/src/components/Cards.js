import React from 'react';



function Cards(props) {
    return (
        <div>
                <h1>
                    <h3>Name: {props.name.name}</h3>
                    <h3>Birth Year: {props.name.birth_year}</h3>
                    <h3>Height: {props.name.height}</h3>
                </h1>
        </div>
    )
}

export default Cards;