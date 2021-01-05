import React, {useState} from 'react';

import '../css/HeaderLinkMobile.css';

import { Link} from "react-scroll";



function HeaderLinkMobile(props,update){

    const [isHover,setHover] = useState(false);



const IsHover = () => {

    setHover(true);
 
 
    
  
};

const IsNotHover = () => {

    setHover(false);
  
   
};



    return(
    <div className = {props.divname}  >
         
          <Link
            activeClass="active"
            to= {props.section}
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            onMouseOver = {IsHover} onMouseLeave = { IsNotHover}  className = {isHover ||(!props.link)? "headerlink":"otherlink" }
            
        >{ props.name}</Link>
    </div>
    );
    }

    

export default HeaderLinkMobile;




