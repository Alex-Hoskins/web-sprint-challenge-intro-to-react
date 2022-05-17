// Write your Character component here
import React, { useState } from "react";
import styled from 'styled-components';




const StyledContain = styled.div`
 
 div{
     display:flex;
 justify-content:space-between;
 box-sizing:border-box;
 align-items:center;
 padding:0 10%;
 border-bottom:1px solid grey;
 }


 
 button{
    padding:5px;
    border-radius:10px;
    background-color:#443e3e;
    color:gold;
    height:50%;
    :hover{cursor: url(https://cur.cursors-4u.net/others/oth-1/oth21.ani), url(https://cur.cursors-4u.net/others/oth-1/oth21.png), auto !important;}</style><a href="https://www.cursors-4u.com/cursor/2005/07/07/oth21-11.html" target="_blank" title="Star Wars Lightsaber Spinning"><img src="https://cur.cursors-4u.net/cursor.png" border="0" alt="Star Wars Lightsaber Spinning" style="position:absolute; top: 0px; right: 0px;" /></a>
    }
  }
  p{
      background-color:black;
      color:green;
      text-shadow: 1px 1px 5px green;
      border-style:double;
      padding-right:20px;
      padding-left:50px;
      padding-bottom:20px;
      padding-top:20px;
      text-align:left;
      font-family: 'Special Elite', cursive;
      margin:5px;
  }
 `


const Character = (props) => {  
    
    console.log(props.char)
    const [isToggled, setIsToggled] = useState(false)
    
    return (
        <StyledContain>
            <div>
            <h2>• { props.char.name }</h2>
            <button onClick={() => setIsToggled(!isToggled)}>Inquire</button>
            </div>
            {isToggled && <p>Initializing data...<br></br>Height: {props.char.height}<br></br>Mass: {props.char.mass}<br></br>Hair Color: {props.char.hair_color}<br></br>Skin Color: {props.char.skin_color}</p>}
            
            
        </StyledContain>
    )
}

export default Character;