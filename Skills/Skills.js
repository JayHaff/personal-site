import React,{useState, useRef,useEffect} from 'react';

import '../css/Skills.css';
import SkillImage from './SkillImage';
import TitleLetter from './TitleLetter';
import SkillItem from './SkillItem';

function Skills(){

    const [appear ,setAppear] = useState(false)
    
    
    const inputRef = useRef();
    const scrollHandler = _ => {

        
     
      if((inputRef.current.getBoundingClientRect().top < 550)&&(inputRef.current.getBoundingClientRect().top > -100)){
        
        setAppear(true);
        
      }
      else{
          setAppear(false);
          
      }

    };
    useEffect(() => {
      window.addEventListener("scroll", scrollHandler, true);
      return
    }, []);

    

    return(
       
       <div className = "skills"id = "skills-section">
           <div className = "titlediv">
               <TitleLetter letter = "S"></TitleLetter>
               <TitleLetter letter = "K"></TitleLetter>
               <TitleLetter letter = "I"></TitleLetter>
               <TitleLetter letter = "L"></TitleLetter>
               <TitleLetter letter = "L"></TitleLetter>
               <TitleLetter letter = "S"></TitleLetter>
            </div>
              <div className={appear? "skillitemdivapperar":"skillitemdivnotapperar"}  ref={inputRef}> 
            
          
                <SkillItem title = "FrontEnd" p = " I utilize programming skills in JS, CSS and HTML to create elegant web designs"></SkillItem>
                <SkillItem title = "Desktop" p = "using C# WPF I implement efficient, effective, and creative deskptop solutions"></SkillItem>
                <SkillItem title = "Datababse"p = "Extensive experience in relational databases"></SkillItem>

            </div>
            
            
            <SkillImage></SkillImage> 
           
         
        </div>
    );
}

export default Skills;