import React from 'react';
import ReactDOM from 'react-dom';
const Cast=(props)=>{
    let ele=[]
    props.data.cast.length=10;
    props.data.cast.forEach(element => {
    ele.push(
  <li className="media mt-2" data-id={element.id} key={element.id}>
  <img className="mr-2" style={{height:"100px"}} src={"http://image.tmdb.org/t/p/original/"+element.profile_path} alt="Generic placeholder image"/>
  <div className="media-body">
    <h5 className="mt-0 mb-1 lead">{element.name} as {element.character}</h5>
<button className="btn btn-block btn-outline-success">Find More Movies With {element.name}</button>

  </div>
</li>

)

    });
return(
<div>


<ul className="list-unstyled">
{ele}
</ul>
<ul>

</ul>
</div>
)
}
export default Cast