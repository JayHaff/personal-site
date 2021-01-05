import React, {useState} from 'react';

import '../css/HeaderLink.css';

import { Link} from "react-scroll";



function HeaderLink(props,update){

    const [isHover,setHover] = useState(false);



const IsHover = () => {

    setHover(true);
    props.update3();
 
    
  
};

const IsNotHover = () => {

    setHover(false);
    props.update4();
   

   
};



    return(
    <div className = { isHover ||(!props.selected||props.indiv) ? props.divname :"divshake" } onMouseLeave={props.update2} onMouseEnter = {props.update1} >
         
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

    

export default HeaderLink;




