import React from 'react';
import ReactDOM from 'react-dom';
import lang from  './language.json'
import Stars from './starcounter';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Media=(props)=>{

    let budget,revenue,country_id,language_id,show,show_tag;
    budget=props.budget===0?"NA":"$"+props.budget/1000000+"M"
   revenue=props.revenue===0?"NA":"$"+Math.round(props.revenue/1000000)+"M"
if(props.language){
    language_id=props.language.map(element=>{



        return " "+lang[element.iso_639_1].nativeName+" "
    })
}



country_id=props.country.map(element=>{

    return     <span data-id={element.iso_3166_1} onClick={e=>{console.log(e.currentTarget.dataset.id)}} className="left-span pr-2"> <span className={`text-desc  pl-3 flag-icon flag-icon-${element.iso_3166_1.toLowerCase()}`}></span></span>
})
show=props.homepage?"d-block":"d-none"
show_tag=props.tagline?"d-block":"d-none"
let classToPass=props.color?"row text-dark":"row"
let buttonVisible=props.button?"d-none":"btn btn-block btn-primary";
let col=props.col?"col-md-6":"col-md-4";
let col2=props.col?"col-md-6":"col-md-8";
let col3=props.col?"col-md-6":"col-md-4";
let col4=props.col?"col-md-6":"col-md-8";
console.log(col,col2,col3,col4)
    return (

        <div className={classToPass}>
<div className={`col-sm-12 ${col}`}>
<img className="mr-3" src={props.Poster} alt="Generic placeholder image"/>
        <br/>
       <button data-id={props.genreId} data-country={props.country.map(element=>{
           return element.iso_3166_1;
       })} onClick={e=>props.callback(e.target.dataset.id,e.target.dataset.country)} className={buttonVisible}> Movies of this genre</button>
</div>






<div className={`${col2} col-sm-12`}>
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



<h5 className={`text-left ${show_tag}`}>"{props.tagline}"</h5>
<Stars color={props.starColor}  total={props.avgRating}/>
<br className={show}/><br className={show}/>
<a className={` alert-link ${show}`} href={props.homepage}>{props.homepage}</a>
<p className="text-justify lead pt-2">{props.Description}</p>
<div className="row">

<div className={`${col3} col-sm-6 col-xs-6 float-left border-right`}>

<span className="text-desc left-span pt-2">


 <i className="fas fa-calendar-alt pl-2 pr-2"></i>{props.date}
</span>
<br/>
<span className="text-desc left-span pt-2">


 <i className="far fa-clock pl-2 pr-2"></i>{Math.round(props.runtime/60)}h{props.runtime%60}m
</span>


<br/>



<span className="left-span text-desc pt-2 pl-2">
{country_id}
</span>


</div>
<div className={`${col4} col-sm-6 col-xs-6 float-right`}>


<span className="text-desc left-span pr-3 pt-2">


 <i className="fas fa-money-bill-alt pl-2 pr-2"></i>
{budget}
</span>
<br/>
<span className="text-desc left-span pt-2">


 <i className="far fa-money-bill-alt pl-2 pr-2"></i>
{revenue}
</span>
<br/>
<span className="text-desc left-span pt-2">


<i className="far fa-smile pl-2 pr-2"></i>
 {props.genre}
</span>

<br/>
<span className="text-desc left-span pt-2">
<i className="fas fa-language pl-2 pr-2"></i>
{language_id}
</span>



</div>
<div className="col-12">



<br/>
</div>
</div>







</div>





</div>
</div>
</div>

    )
}
export default Media;