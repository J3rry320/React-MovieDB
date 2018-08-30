import React,{ Component } from "react";
import axios from 'axios';

import Studio from './Studio';
import Cast from './Cast';
import Media from './Media';
import Upcoming from './Upcoming';

let toShowMovie=true;
let itemToShow=null;

class Cards extends Component{
    constructor(props){
        super(props)
        this.state={
         items:[]
        }
        this.fetchMovieByDescription=this.fetchMovieByDescription.bind(this)
    }

    fetchMovieByDescription(genre,cast){

        let url=`https://api.themoviedb.org/3/discover/movie?api_key=b1ceec131e81ece0cacf2f641d01910a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`;
    axios.get(url).then(
        result=>{
            toShowMovie=false
 this.setState({items:[<Upcoming data={result.data.results}/>]})

        }
    ).catch(
        error=>{
            console.log(error)
        }
    )
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



        let genre="";
        let genreId=""
if(this.state.genre){
     genre=  this.state.genre.map(element=>{
        return element.name+","
    })
    genreId= this.state.genre.map(element=>{
        return element.id
    })
}
else{
    genre="";
    genreId="";
}



        if (this.props.data.length===0){
            return "Type Bitch"
        }
        else if(toShowMovie && this.props.data.length!==0 ){
            return(



                <div className="row">
                <div className="col-sm-12">
      <Media Poster={this.state.Poster}
      title={this.state.title} tagline={this.state.tagline}
      avgRating={this.state.avgRating} date={this.state.date}
      runtime={this.state.runtime} budget={this.state.budget}
      revenue={this.state.revenue} Description={this.state.Description}
      genre={genre} callback={this.fetchMovieByDescription} genreId={genreId}/>
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
else {
    console.log("Done")
return(
    <div>
    {this.state.items}
    </div>
)
}
    }



componentWillUpdate(){

}



}
export default Cards;