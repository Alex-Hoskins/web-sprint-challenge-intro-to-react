import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';
import styled from 'styled-components';


const StyledContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  font-family: sans-serif;
  box-sizing:border-box;

  .styledCharContainer{
  border:1px solid #d2d7df;
  background-color:#FCFCF7;
  width:25%; 
  border: ridge gold;
  border-radius: 13em/3em;
  color: #443e3e;
  text-shadow: 1px 1px 5px red;
  box-sizing:border-box;
}
  }
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [ starWarsData, setStarWarsData ] =useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setStarWarsData(res.data);
      }).catch(err => {
        console.error(err);
      })
  }, [])

  console.log(starWarsData)

  return (
    
    <div className="App">
    <StyledContainer>
      <h1 className="Header">Characters</h1>
      <div className="styledCharContainer">
        {
          starWarsData.map(char => {
            return <Character char={char} key={char.height} starWarsData={starWarsData}/>
          })
        }
      </div>
    </StyledContainer>
    </div>
    
  );
}

export default App;
