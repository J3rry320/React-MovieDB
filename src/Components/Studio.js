import React from 'react';
import ReactDOM from 'react-dom';
const Studio=(props)=>{
    let ele=[]
    let image
props.data.forEach(element => {
  if(element.logo_path===null){
    image="https://www.toadandco.com/c.1311986/sca-dev-elbrus/img/no_image_available.jpeg"
  }
  else{
    image="http://image.tmdb.org/t/p/original/"+element.logo_path
  }
  ele.push(<figure className=" pl-3 left-span" data-id={element.id} key={element.id} onClick={e=>{console.log(e.currentTarget.dataset.id)}}>
    <img className="img-fluid" alt="Image Not Found"  src={image}/>

    <figcaption className="pt-3 lead text-center text-monospace" >{element.name}</figcaption>
  </figure>
  )
});

return(
<div>
    <h4 className="text-monospace mt-5 pt-5 mb-5">From the studios of</h4>
{ele}
</div>

)
}
export default Studio;