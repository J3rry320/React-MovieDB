import React,{ Component } from "react";


import Studio from './Studio';
import Cast from './Cast';
import Media from './Media'
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
        return element.name+","
    })
}
else{
    genre=""
}



        if (this.props.data.length===0){
            return "Type Bitch"
        }
        else{
            return(

          <div className="row">
          <div className="col-sm-12">
<Media Poster={this.state.Poster}
title={this.state.title} tagline={this.state.tagline}
avgRating={this.state.avgRating} date={this.state.date}
runtime={this.state.runtime} budget={this.state.budget}
revenue={this.state.revenue} Description={this.state.Description}
genre={genre}/>
          </div>
 <div className="col-sm-4">
  <span className="left-span">

<Studio data={this.state.productionCompanies}/>

</span>
</div>
<div className="col-sm-8">
<span className="left-span">

<Cast data={this.state.Cast}/>

</span>

  </div>
          </div>





            )
        }

    }



}
export default Cards;