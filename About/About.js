import React,{useState, useEffect} from 'react';
import App from '../App';
import '../css/About.css';
import AboutText from './AboutText';
import BeeImage from './BeeImage';





const texts = ["Hello","Welcome to my site","My name is Jamel Hafiani","But you can call me Jay", 
"Did you know by the time you've read this the earth has traveled more than 1,000 kilometers around the sun ","I hope you enjoy my site ","I will leave you this . . . . .",
'"Go to your fields and your gardens, and you shall learn that it is the pleasure of the bee to gather the honey of the flower, but it is also the pleasure of the flower to yield its honey to the bee, be in your pleasures like the flowers and the bees."s']

let count = 0;
let count2 = 0;
let count3 = 0;

function About(){

    const [currentText, setCurrentText] = useState(0)
    const [index, setIndex] = useState(0)
    const [content, setContent] = useState("")
    const [stop, setStop] = useState(true)
    const [index2, setIndex2] = useState(0)
    const [typing, setTyping] = useState(true)
    const [finish, setFinish] = useState(false);
    const [dimensions, setDimensions] = useState("0")
    const [dimensions2, setDimensions2] = useState("0")
    const [dimensions3, setDimensions3] = useState("0")
    
    
    
    
     
   
    
    useEffect(()=>{
        
        
        

        if((index === texts[currentText].length)&&stop) {
            
            if(index2 ==0){
            setTyping(false);
            setCurrentText(currentText+1)
            setContent("")
            if(currentText ===(texts.length-2)) {
                setTyping(false);
                const t = setTimeout(()=> {
                
                    
                    setIndex(0);
                    setStop(false);
                }, 100)
        
        
                return () => clearTimeout(t)
                
            }
            
            
                
            const t = setTimeout(()=> {
                
                    
                setIndex(0);
                
            }, 1000)
    
            return () => clearTimeout(t)
    
          
            }
            else{
                if(index2 === texts[currentText].length)
                {
                    setTyping(false);
                   
                const r = setTimeout(()=> {
                    const t = setTimeout(()=> {
                        setContent(texts[currentText].slice(0,index2))
                        
                        setIndex2(index2-1)
                    }, 5)
                    return () => clearTimeout(t)

                }, 3000)
                return () => clearTimeout(r)
                }
                setTyping(true);
                
                const t = setTimeout(()=> {
                    setContent(texts[currentText].slice(0,index2))
                    
                    setIndex2(index2-1)
                }, 50)
                return () => clearTimeout(t)
            }

        }
        else if(stop){
            setTyping(true);
            setDimensions("0");
            setDimensions2("0");
            setDimensions3("0");
            

        const t = setTimeout(()=> {
            setContent(content + texts[currentText][index])
            setIndex(index + 1)
            setIndex2(index+1)
            

            
        }, 100)
    

        return () => clearTimeout(t)
        }


    if(!stop && !finish){
        
        setTyping(true);
        
        const t = setTimeout(()=> {
            setContent(content + texts[currentText][index])
            if(index<(texts[currentText].length-1) ){
            setIndex(index + 1)
            
          }
        }, 100)
    
     
    

        if(index === (texts[currentText].length-1)){
            setFinish(true);
          
           
        }
       
        
        return () => clearTimeout(t)


    }

    else if(finish)
    {
        if (count < 80){
            const r = setTimeout(()=> {
               
                count += 1;
                count2 += .5;
                count3 += .25;
                setDimensions(count.toString());
                setDimensions2(count2.toString());
                setDimensions3(count3.toString());
                
              
            }, 100)
            return () => clearTimeout(r)
          


            }
        }
    }, [index,stop,index2,dimensions,finish])

    

    

   


    return(
       
       <div className = "about" id = "about-section">
           
            <AboutText content = {content} changeClass={typing} finish = {finish}></AboutText>
            <BeeImage dimensions = {dimensions} divname = "beediv1"></BeeImage>
            <BeeImage dimensions = {dimensions2}divname = "beediv2"></BeeImage>
            <BeeImage dimensions = {dimensions} divname = "beediv3"></BeeImage>
            <BeeImage dimensions = {dimensions3} divname = "beediv4"></BeeImage>
            <BeeImage dimensions = {dimensions2} divname = "beediv5"></BeeImage>
           
        </div>
    );
}




export default About;
