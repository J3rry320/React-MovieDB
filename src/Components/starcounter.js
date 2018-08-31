import React from 'react';
import ReactDOM from 'react-dom'
const starCounter=(props)=>{

let totalStars=props.total/2;
let halfStars=(totalStars%1)
let element=[];
let completeStars=Math.trunc(totalStars);
for(let i=0;i<completeStars;i++){
    element.push(    <i className="text-desc left-span fas  fa-star" key={i}></i>)
}
let remainingStars=5-completeStars;
for(let j=0;j<remainingStars;j++){
    element.push( <i className="text-desc left-span far fa-star" key={j+10}></i>)
}

    //console.log(totalStars,completeStars,remainingStars,halfStars)
return(
<div className="left-span">

{element}


    </div>
)
}
export default starCounter;