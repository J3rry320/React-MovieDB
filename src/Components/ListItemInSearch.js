import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios'
const ListItem=(props)=>{

   //Check and Update


   return (
    <li onClick={e=>props.callback(e.currentTarget.dataset.id )} data-id={props.id}  className="list-group-item">
{props.name}

    </li>

)
};



export default ListItem;