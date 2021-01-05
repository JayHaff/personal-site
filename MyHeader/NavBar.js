import React, {useState} from 'react';

import '../css/NavBar.css';


function NavBar(props){

    const [isHover,setHover] = useState(false);



    const IsHover = () => {
    
        setHover(true);
    
    };
    
    const IsNotHover = () => {
    
        setHover(false);
   
    };




    return(
    <div className = "burger"  onMouseOver = {IsHover} onMouseLeave = { IsNotHover} onClick ={props.open} >
         <ul>
         <div className = {isHover?"linehover":"line"}></div>
         <div className = {isHover?"linehover":"line"}></div>
         <div className = {isHover?"linehover":"line"}></div>
         </ul>
         
    </div>
    );
    }

    

export default NavBar;




