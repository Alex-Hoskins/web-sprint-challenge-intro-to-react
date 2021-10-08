// Write your Character component here
import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Character = (props) => {  
    
    console.log(props.char)
    
    return (
            <h2>{ props.char.name }</h2>
        
    )
}

export default Character;