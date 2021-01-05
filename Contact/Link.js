import React from 'react';

import '../css/Link.css';





function Link(props){

    return(
   <div className="icondiv">
      
      <a href="https://github.com/JayHaff" className="git"><i className="fab fa-github" ></i></a> 
      
      
      <a href="https://www.linkedin.com/in/jay-hafiani/" className="linkedin"><i class="fab fa-linkedin"></i></a> 
    </div>
    )


}



export default Link;