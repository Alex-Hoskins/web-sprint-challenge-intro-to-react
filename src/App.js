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

  .styledCharContainer{
  border:1px solid #d2d7df;
  background-image: url(https://images.unsplash.com/photo-1588802822758-c3ccfa682d8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  color:#d2d7df;
  width:25%;
  font-family: 'Shadows Into Light', cursive;
 
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
            return <Character char={char} key={char.height} />
          })
        }
      </div>
    </StyledContainer>
    </div>
    
  );
}

export default App;
