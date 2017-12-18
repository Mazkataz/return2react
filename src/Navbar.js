import React from 'react'; 


 const Navbar = (props) => {
return(
<div className = "navbar">

<a href="#" > Home Page </a> 
<a href="#"> Experience </a> 

<a href="#"> About Us </a> 
<a href="#"> Contact </a> 


<div className = "logged-display"> 
{props.loggedIn ? <a href="#"> Sign Out </a>  : <a href="#"> Sign In </a>};  
</div> 


    </div>
); 

}

export default Navbar; 