import React,{ Component } from "react";

import Stars from './starcounter'
let element=null;

class Cards extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentWillReceiveProps(props){

        props.data.forEach(element => {

            this.setState({
                title:element.title,
                Description:element.overview,
                Poster:"http://image.tmdb.org/t/p/w185_and_h278_bestv2//"+element.poster_path,
                homepage:element.homepage,
                date:element.release_date,
                tagline:element.tagline,
                avgRating:element.vote_average,
                runtime:element.runtime,
                revenue:element.revenue,
                popularity:element.popularity,
                background:"http://image.tmdb.org/t/p/w185_and_h278_bestv2//"+element.backdrop_path,
                budget:element.budget,
                voteCount:element.vote_count,
                statusOfRelease:element.status,
                imdbId:element.imdb_id,//All are array from here
                productionCompanies:element.production_companies,
                genre:element.genres,
                productionCountry:element.production_country,
                spoken_languages:element.spoken_languages,
                Cast:element.credits




            })
        });

                //this.extractData(this.state.data)

            }
    render(){
        let genre=""
if(this.state.genre){
     genre=  this.state.genre.map(element=>{
        return element.name+" "
    })
}
else{
    genre=""
}


        if (this.props.data.length===0){
            return "Loading"
        }
        else{
            return(

                <div className="media">
               <center>
               <img className="mr-3" src={this.state.Poster} alt="Generic placeholder image"/>
              <button className="btn btn-block btn-primary">Find Similar Movies</button>
               </center>


  <div className="media-body text-center">

  <div className="container">
  <div className="row">
  <div className="col-md-5 col-sm-12">
  <h1 className="mt-4">{this.state.title}</h1>
   <h5 className="mono-space">"{this.state.tagline}"</h5>

   <Stars total={this.state.avgRating}/>
   <p className="lead">
   <span className="left-span pt-2">
   <i className="fas fa-calendar-alt pr-2"></i>{this.state.date}
   </span>
   <br/>
   <span className="left-span pt-2">
   <i className="far fa-clock"></i>{Math.round(this.state.runtime/60)}hours and {this.state.runtime%60}minutes
   </span>
   <br/>
   <span className="left-span pt-2">
   <span className="pr-3">
   <i className="fas fa-money-bill-alt pr-2"></i>
   {this.state.budget}
   </span>
<span>
<i className="far fa-money-bill-alt pr-2"></i>
{this.state.revenue}
</span>


   </span>
   <br/>
   <span className="left-span pt-2">
     {genre}
   </span>
   </p>


   </div>
  <div className="col-md-7 col-sm-12">
<p className="text-left lead mt-4">{this.state.Description}</p>

  </div>
  </div>



  </div>


  </div>
</div>



            )
        }

    }



}
export default Cards;