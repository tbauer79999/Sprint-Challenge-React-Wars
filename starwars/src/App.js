import React from "react";
import "./App.css";
import Character from "./components/Character";
import styled from 'styled-components';


const CustomedDiv = styled.div`
display: inline-block;`;



const App = () => {
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CustomedDiv>
      <div>
      <Character />
      </div>
     </CustomedDiv>
    </div>
  );
}
export default App;