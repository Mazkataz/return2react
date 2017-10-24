import React from 'react'; 


 const Navbar = (props) => {
return(
<div className = "navbar">

this is the navbar

<div className = "logged-display"> 
{props.loggedIn ? "you are logged in" : "you are not logged in"};  
</div> 


    </div>
); 

}

export default Navbar; 