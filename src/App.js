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
  cursor: url(https://cur.cursors-4u.net/others/oth-1/oth24.cur), auto !important;}</style><a href="https://www.cursors-4u.com/cursor/2005/07/07/oth24.html" target="_blank" title="Star Wars Lightsaber"><img src="https://cur.cursors-4u.net/cursor.png" border="0" alt="Star Wars Lightsaber" style="position:absolute; top: 0px; right: 0px;" /></a>

  h1{
    font-size:3.5rem;
  }

  .styledCharContainer{
  border:1px solid #d2d7df;
  background-color:#FCFCF7;
  width:350px; 
  border: ridge gold;
  border-radius: 13em/3em;
  color: #443e3e;
  text-shadow: 1px 1px 5px gold;
  box-sizing:border-box;
  margin-bottom:5%;
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
  const lastItem = starWarsData[starWarsData.length]

  return (
    
    <div className="App">
    <StyledContainer>
      <h1 className="Header">LIFEFORM<br></br>IDENTIFICATION</h1>
      <div className="styledCharContainer">
        {
          starWarsData.map(char => {
            return <Character char={char} key={char.height}/>
          })
        }
      </div>
    </StyledContainer>
    </div>
    
  );
}

export default App;
