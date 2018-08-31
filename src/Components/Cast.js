import React from 'react';
import ReactDOM from 'react-dom';
const Cast=(props)=>{
    let ele=[]
    props.data.cast.length=10;

    props.data.cast.forEach(element => {
     let image=element.profile_path?"http://image.tmdb.org/t/p/h632/"+element.profile_path:"https://www.toadandco.com/c.1311986/sca-dev-elbrus/img/no_image_available.jpeg"
    ele.push(
      <div className="card bg-light text-dark" data-id={element.id}>
  <img className="card-img-top img-fluid"  src={image} alt={element.name}/>
  <div className="card-body text-center">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">Playing the character of {element.character}</p>
    <button className="btn btn-block btn-outline-success">Find More Movies With {element.name}</button>

  </div>
</div>


)

    });
return(
<div>



{ele}

<ul>

</ul>
</div>
)
}
export default Cast