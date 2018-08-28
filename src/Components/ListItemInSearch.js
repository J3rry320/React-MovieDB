import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios'
const ListItem=(props)=>{

   //Check and Update


   return (
    <li onClick={handleClick} data-id={props.id}  className="list-group-item">
{props.name}

    </li>

)
};

const fetchMovieID=(movieID)=>{
    let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=b1ceec131e81ece0cacf2f641d01910a`
  axios.get(url).then(result=>{
      console.log(result)
  }).catch(error=>{
      console.log(error)
  }

  )
}
const handleClick=(e)=>{
fetchMovieID(   e.currentTarget.dataset.id )
};
export default ListItem;