import React, {useState} from 'react';

import '../css/About.css';





function AboutText(props){

    return(

        <h1 className = {props.finish ? "typingfinal":(props.changeClass ? "typingdone":"typing")}> {props.content.toString()}</h1>
        
    )


}



export default AboutText;