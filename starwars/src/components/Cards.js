import React from "react";
import styled from "styled-components";



const Box = styled.div`
  border: 2px solid black;
  margin: 20px;
  background-color: #ffffff46;
`

const Para = styled.p`
  color: gray;
  font-weight: bold;
`



function Card(props) {
    console.log("Props", props.character);
    return (
        <Box>
            <div>
                <h1>Name: {props.character.name}</h1>
                <Para>My height is: {props.character.height} cm</Para>
                <Para>Mass: {props.character.mass}</Para>
                <Para>Gender: {props.character.gender}</Para>
                <Para>Skin Color: {props.character.skin_color}</Para>
                <Para>Eye Color: {props.character.eye_color}</Para>
            </div>
        </Box>
    );
}
export default Card;