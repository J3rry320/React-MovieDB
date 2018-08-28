import React from "react";
import ReactDOM from "react-dom";
const cards=(props)=>{
    return(
        <div className="card" >
        <img className="card-img-top" src={props.Image} alt="Card image cap"/>
      <div className="card-body">

       <button  className="btn btn-outline-primary">Find Movie of the same Genre</button>
    </div>
      </div>
    );
};
export default cards;