import React from 'react';
import "../App.css"
import ReactDOM from 'react-dom';
import Stars from './starcounter'
const ListDescription =(props)=>{
     return(
      <div className="row">
        <div className="col-sm-6">

        </div>
        <div className="col-sm-6">

        </div>
      <div className="col-sm-12">

      <h4 className="mt-5 mb-3">{props.description}</h4>
      <div className="left-span mb-3">
       <Stars total={props.popularity}/>
      </div>
      </div>


      </div>
     )

}
export default ListDescription;