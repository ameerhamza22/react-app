import React from 'react';
function Dinner(props)
{
    return (
        <div>
       <h1>Hello I am serving tonight {props.dishName} </h1> 
        <h1>I am also serving {props.dish}</h1>
        
        </div>
        
          );
}
export default Dinner;