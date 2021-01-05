import React,{useState, useEffect} from 'react';

import '../css/SkillItem.css';



function SkillItem(props){

    return(
        <div className = "skilldiv">
        

            <h1 className="texthead">{props.title}</h1> 
            <p className="text">
                {props.p}
            </p>
    
        </div>
        
    )

}

export default SkillItem;