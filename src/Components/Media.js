import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './starcounter';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Media=(props)=>{
console.log(props.country,props.language)
    let budget,revenue,country,country_id,language,language_id;;
    budget=props.budget===0?"NA":props.budget/1000000+"M"
   revenue=props.revenue===0?"NA":props.revenue/1000000+"M"

   language_id=props.language.map(element=>{
    return element.iso_639_1
})
language=props.language.map(element=>{
    return element.name
})
country=props.country.map(element=>{
    return element.name
})
country_id=props.country.map(element=>{
    return element.iso_3166_1
})

    return (
        <div className="row">
<div className="col-md-6 col-sm-12">
<img className="mr-3" src={props.Poster} alt="Generic placeholder image"/>
        <br/>
       <button data-id={props.genreId} onClick={e=>props.callback(e.target.dataset.id)} className="btn btn-block btn-primary"> Movies of this genre</button>
</div>






<div className="col-md-6 col-sm-12">
<div className="row">
<div className="col-md-12 col-sm-12">
<span className="left-span">
<span className="left-span">
<h1 className="mt-4 display-4 text-left">{props.title}</h1>
</span>

<span className="left-span pt-4 pl-2">
<h4 className="text-left">
({props.date.substring(0,4)})
</h4>

</span>
</span>



<h5 className=" text-left">"{props.tagline}"</h5>
<a className="alert-link" href={props.homepage}>{props.homepage}</a>
<p className="text-left text-monospace lead mt-4">{props.Description}</p>
<div className="row">
<div className="col-4" style={{height:"50%"}}>
<CircularProgressbar
  percentage={props.popularity}
  text={`${props.popularity}%`}
 />

</div>
<div className="col-4 float-left border-right">
<span className="text-desc left-span pt-2">
Realesed:
<br/>
 <i className="fas fa-calendar-alt pl-2 pr-2"></i>{props.date}
</span>
<br/>
<span className="text-desc left-span pt-2">
Runtime:
<br/>
 <i className="far fa-clock pl-2 pr-2"></i>{Math.round(props.runtime/60)}hours {props.runtime%60}minutes
</span>
<br/>
<span className="left-span">
Rating:

<Stars total={props.avgRating}/>
</span>

</div>
<div className="col-4 float-right">


<span className="text-desc left-span pr-3">
Spent:
<br/>
 <i className="fas fa-money-bill-alt pl-2 pr-2"></i>
{budget}
</span>
<br/>
<span className="text-desc left-span">
Earned:
<br/>
 <i className="far fa-money-bill-alt pl-2 pr-2"></i>
{revenue}
</span>
<br/>
<span className="text-desc left-span pt-2">

Genre:
<br/>
<i className="far fa-smile pl-2 pr-2"></i>
 {props.genre}
</span>
</div>

</div>







</div>





</div>
</div>
</div>

    )
}
export default Media;