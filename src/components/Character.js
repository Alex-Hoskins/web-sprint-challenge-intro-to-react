// Write your Character component here
import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const StyledContain = styled.div`
 display:flex;
 justify-content:space-between;
 box-sizing:border-box;
 align-items:center;
 padding:0 10%;
 border-bottom:1px solid grey;

 button{
     height:50%;
 }
 `


const Character = (props) => {  
    
    console.log(props.char)
    
    return (
        <StyledContain>
            <h2>• { props.char.name }</h2>
            <button>Inquire</button>
        </StyledContain>
    )
}

export default Character;