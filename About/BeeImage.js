import React,{useState, useEffect} from 'react';

import '../css/BeeImage.css';

import logo from '../images/beeimage.jpg';

function BeeImage(props){

    return(
        <div className = {props.divname}>
            
            <img src = {logo} width={props.dimensions} height ={props.dimensions}  ></img>
        </div>
        
    )

}

export default BeeImage;