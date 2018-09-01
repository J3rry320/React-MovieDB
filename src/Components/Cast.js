import React from 'react';
import ReactDOM from 'react-dom';
const Cast=(props)=>{
    let ele=[]
    props.data.cast.length=10;
    props.data.cast.forEach(element => {
      let image=element.profile_path?"http://image.tmdb.org/t/p/original/"+element.profile_path:"https://www.toadandco.com/c.1311986/sca-dev-elbrus/img/no_image_available.jpeg"
    ele.push(
  <li className="media mt-3"  key={element.id}>
  <img className="mr-2 mt-2 img-fluid" style={{height:"100px"}} src={image} alt={element.name}/>
  <div className="media-body ">
    <h5 className="mt-3 mb-1 lead">{element.name} as {element.character}</h5>
<button data-id={element.id} onClick={e=>{props.callback(null,null,e.target.dataset.id)}} className="btn btn-outline-success">Find More Movies With {element.name}</button>

  </div>
</li>

)

    });
return(





<ul className="list-unstyled mt-5">
{ele}
</ul>





)
}
export default Cast