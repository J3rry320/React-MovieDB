import React,{ Component } from "react";
import axios from 'axios';

import Studio from './Studio';
import Cast from './Cast';
import Media from './Media';
import Upcoming from './Upcoming';
import Youtube from './YoutubePlayer';


let itemToShow=null;

class Cards extends Component{
    constructor(props){
        super(props)
        this.state={
         items:[],
         toShowMovie:true,
        }
        this.fetchMovieByDescription=this.fetchMovieByDescription.bind(this)
    }

    fetchMovieByDescription(genre,country,cast){
        let url;
//        console.log(genre,country.substring(0,2))
//console.log(cast)
       if(genre && country && !cast){
         url=`https://api.themoviedb.org/3/discover/movie?api_key=b1ceec131e81ece0cacf2f641d01910a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&region=${country.substring(0,2)}`;
       }
       if(cast && !genre){
           url=`https://api.themoviedb.org/3/discover/movie?api_key=b1ceec131e81ece0cacf2f641d01910a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=${cast}`
       }

    axios.get(url).then(
        result=>{

            console.log(result)
 this.setState({items:[<Upcoming data={result.data.results}/>],toShowMovie:false})

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
                Poster:"http://image.tmdb.org/t/p/w342/"+element.poster_path,
                homepage:element.homepage,
                date:element.release_date,
                tagline:element.tagline,
                avgRating:element.vote_average,
                runtime:element.runtime,
                revenue:element.revenue,
                popularity:element.popularity,
                background:"http://image.tmdb.org/t/p/original"+element.backdrop_path,
                budget:element.budget,
                voteCount:element.vote_count,
                statusOfRelease:element.status,
                imdbId:element.imdb_id,//All are array from here
                productionCompanies:element.production_companies,
                genre:element.genres,
                productionCountry:element.production_countries,
                spoken_languages:element.spoken_languages,
                Cast:element.credits




            })

        });



                //this.extractData(this.state.data)

            }
    render(){



        let genre,genreId;



if(this.state.genre){
     genre=  this.state.genre.map(element=>{
        return element.name+" "
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
            return (<center>
                <h3 className="display-4 pt-4   ">
                   Start Typing and Search Movies
                </h3>
            </center>)
        }
        else if(this.state.toShowMovie && this.props.data.length!==0 ){
            return(

<div className="container-fluid pt-2 mt-5" style={{backgroundImage:`url(${this.state.background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>


                <div className="row bg-opaque">
                <div className="col-sm-12">
      <Media Poster={this.state.Poster}
      popularity={this.state.popularity}
      homepage={this.state.homepage}
country={this.state.productionCountry}
language={this.state.spoken_languages}
      title={this.state.title} tagline={this.state.tagline}
      avgRating={this.state.avgRating} date={this.state.date}
      runtime={this.state.runtime} budget={this.state.budget}
      revenue={this.state.revenue} Description={this.state.Description}
      genre={genre} callback={this.fetchMovieByDescription} genreId={genreId}/>
                </div>
       <div className="col-sm-12 col-md-4">


      <Studio data={this.state.productionCompanies}/>


      </div>
      <div className="col-sm-12 col-md-8">


      <Cast callback={this.fetchMovieByDescription} data={this.state.Cast}/>

        </div>
        <div className="container">
        <div className="col-sm-12">
<Youtube term={this.state.title}/>
        </div>
        </div>



                </div>

</div>


            )
        }
else {

return(
    <div>
        <button onClick={e=>{this.setState({toShowMovie:true})}} className="btn btn-primary btn-block">Go Back</button>
    {this.state.items}
    </div>
)
}
    }



componentWillUpdate(){

}



}
export default Cards;