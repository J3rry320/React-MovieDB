import React from 'react';
import ReactDOM from 'react-dom';
const Studio=(props)=>{
    let ele=[]
props.data.forEach(element => {
  ele.push(<figure className=" pl-3 left-span" data-id={element.id} key={element.id} onClick={e=>{console.log(e.currentTarget.dataset.id)}}>
    <img style={{height:"70px"}} alt="Image Not Found"  src={"http://image.tmdb.org/t/p/original/"+element.logo_path}/>

    <figcaption className="pt-3 lead" >{element.name}</figcaption>
  </figure>
  )
});

return(
<div>
    From
{ele}
</div>

)
}
export default Studio;