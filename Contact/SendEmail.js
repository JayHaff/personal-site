import React from 'react';

import '../css/SendEmail.css';
import emailjs from 'emailjs-com';


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ovmchdr', 'template_0as86pv', e.target, 'user_D5ZuAoPNtnHWrE4aV0KeL' )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })

      e.target.reset();
  }

function SendEmail(props){

    return(
    <div className = "formdiv" onSubmit = {sendEmail}> 
        <form className="contact-form" >
 
        <div>
            <input type="email" name="email" placeholder="Email:" className="email-form" />
        </div>
        
        <div>
            <input type="text" name="subject" placeholder ="Subject:" className = "subject-form" />
        </div>
        
        <div>
            <textarea name="message" placeholder="Message:"  className="message-form"/>
        </div>
       
       <div>
        <   input type="submit" value="SEND" className ="submit-button"/>
        </div>
      </form>

      

      

    </div>
    )


}



export default SendEmail;