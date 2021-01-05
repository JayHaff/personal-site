import React from 'react';

import '../css/Contact.css';
import SendEmail from './SendEmail';
import Link from './Link';
import Animate from './Animate';

function Contact(){

    return(
       
       <div className = "contact" id = "contact-section">
            
            <div>
                <Animate></Animate>
            </div> 
            <SendEmail></SendEmail>
            

            <div className="linkclassdiv">
                <Link></Link>
            </div>
            
           
         
        </div>
    );
}

export default Contact;