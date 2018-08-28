import React from "react";
import ReactDOM from "react-dom";
const cards=(props)=>{
    return(
        <div className="card" >
        <img className="card-img-top" src={props.Image} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
       <a href="#" className="btn btn-primary">Find Movie of the same Genre</a>
    </div>
      </div>
    );
};
export default cards;