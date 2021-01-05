import React,{useState} from 'react';


import '../css/Header.css';

import HeaderLink from './HeaderLink';
import NavBar from './NavBar';
import HeaderLinkMobile from './HeaderLinkMobile';



function MyHeader(){

   
    const [isSelected,setIsSelected] = useState(false);
    const [isInDiv,setIsInDiv] = useState(false)
    const [isOnLink,setIsOnLink] = useState(false)
    const [changemobilediv, setChangeMobileDiv] = useState(true);
    
    
  
    

    
const IsSelected = () => {

    setIsSelected(true);
  
};

const IsNotSelected = () => {

    
    setIsSelected(false);
};

const IsUpdate1 = () => {

    setIsInDiv(true);
    
    
    
   
};

const IsUpdate2 = () => {

    setIsInDiv(false);
    
  
};

const IsUpdate3 = () => {

    setIsOnLink(true);
    
    
   
};

const IsUpdate4 = () => {

    setIsOnLink(false);
    
  
};

const Change = () => {

    setChangeMobileDiv(true);
  
    
   
 };

 const Open = () => {

    setChangeMobileDiv(false);
   console.log("open");
 };

    
    
    return(
       <div className = "header" onMouseEnter={IsSelected} onMouseLeave ={IsNotSelected} >
            <h1 className="headerlogo">{"<  JH  >"}</h1>
            <div className = "linkdiv"  >
           
          
            <HeaderLink name ="Contact" section = "contact-section"divname= "contactdiv" selected = {isSelected} indiv={isInDiv}
             update1={IsUpdate1} update2 ={IsUpdate2} link = {isOnLink} update3 = {IsUpdate3} update4 ={IsUpdate4}></HeaderLink>
           
            <HeaderLink name ="Skills" section = "skills-section"divname= "skillsdiv" selected = {isSelected} 
            update1={IsUpdate1} update2 ={IsUpdate2} indiv={isInDiv}  link = {isOnLink} update3 = {IsUpdate3} update4 ={IsUpdate4}></HeaderLink>
           <HeaderLink name ="Home" section = "about-section"divname= "aboutdiv"selected = {isSelected} 
            update1={IsUpdate1} update2 ={IsUpdate2}indiv={isInDiv}  link = {isOnLink} update3 = {IsUpdate3} update4 ={IsUpdate4} ></HeaderLink>
         
         <NavBar open = {Open}> </NavBar>
          
            </div>

            <div className = {changemobilediv?"mobiledivdone":"mobilelinkdiv"} onMouseLeave = {Change} >
           
          
           <HeaderLinkMobile name ="Home" section = "about-section"divname= "aboutdivmobile" ></HeaderLinkMobile>
           <HeaderLinkMobile name ="Skills" section = "skills-section"divname= "skillsdivmobile" ></HeaderLinkMobile>
           <HeaderLinkMobile name ="Contact" section = "contact-section"divname= "contactdivmobile" ></HeaderLinkMobile>
         
          
           </div>

         
        </div>
        
    )
}


export default MyHeader;
