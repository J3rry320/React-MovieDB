import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './starcounter';
const Media=(props)=>{

    let budget,revenue;
    budget=props.budget===0?"NA":props.budget/1000000+"M"
   revenue=props.revenue===0?"NA":props.revenue/1000000+"M"


    return (
        <div className="media">
        <center>
        <img className="mr-3" src={props.Poster} alt="Generic placeholder image"/>
        <br/>
       <button data-id={props.genreId} onClick={e=>props.callback(e.target.dataset.id)} className="btn btn-block btn-primary">Find Similar Movies</button>
        </center>


<div className="media-body text-center">

<div className="container">
<div className="row">
<div className="col-md-5 col-sm-12">
<h1 className="mt-4">{props.title}</h1>
<h5 className="mono-space">"{props.tagline}"</h5>

<Stars total={props.avgRating}/>
<p className="lead">
<span className="left-span pt-2">
<i className="fas fa-calendar-alt pr-2"></i>{props.date}
</span>
<br/>
<span className="left-span pt-2">
<i className="far fa-clock"></i>{Math.round(props.runtime/60)}hours and {props.runtime%60}minutes
</span>
<br/>
<span className="left-span pt-2">
<span className="pr-3">
<i className="fas fa-money-bill-alt pr-2"></i>
{budget}
</span>
<span>
<i className="far fa-money-bill-alt pr-2"></i>
{revenue}
</span>


</span>
<br/>
<span className="left-span pt-2">
{props.genre}
</span>
</p>


</div>
<div className="col-md-7 lead col-sm-12">
<p className="text-left lead mt-4">{props.Description}</p>


</div>
</div>
</div>
</div>
</div>
    )
}
export default Media;