import React,{useState, useEffect} from 'react';

import '../css/TitleLetter.css';



function TitleLetter(props){

    return(
        <div classname = "letterdiv">
        

            <h1 className = "skillstag">{props.letter}</h1> 
    
        </div>
        
    )

}

export default TitleLetter;