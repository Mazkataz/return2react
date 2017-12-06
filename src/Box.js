

import React from 'react'; 

const Box =(props)=> {

    return(
        <div className = "super-container"> 
<div className="image-box-container"  > 
<img src = {props.renderImage}   alt =""  width = {100} height = {200}  /> 
</div>
<div className = "image-text-container" >
{props.description ? props.description : ''}
</div> 




</div> 
    );
}
export default Box;             