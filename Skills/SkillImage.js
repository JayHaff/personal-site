import React,{useState, useEffect} from 'react';

import '../css/SkillImage.css';

import logo from '../images/laptop.jpg';

function SkillImage(props){

    return(
        <div className = "imagediv">
            
            <img src = {logo} width="550" height ="400" className="image "  ></img>
        </div>
        
    )

}

export default SkillImage;