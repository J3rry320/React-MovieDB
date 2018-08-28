import React,{Component} from 'react';
import axios from 'axios';
import Descriptor from "./Media"
let elements=[]
class UpcomingMovies extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    fetchUpcoming(){
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=b1ceec131e81ece0cacf2f641d01910a&language=en-US&page=1&append_to_response=credits").then(
          result=>{
            result.data.results.forEach(element=>{

                this.setState({
                    title:element.title,
                    Description:element.overview,
                    Poster:"http://image.tmdb.org/t/p/w185_and_h278_bestv2//"+element.poster_path,

                    date:element.release_date,

                    avgRating:element.vote_average,

                    popularity:element.popularity,
                    background:"http://image.tmdb.org/t/p/w185_and_h278_bestv2//"+element.backdrop_path,
                    language:element.original_language,
                    voteCount:element.vote_count,
                    statusOfRelease:element.status,
                    id:element.id,//All are array from here

                    genre:element.genre_ids,





                })
                            })
          }
        )
      }
      render(){

          return(
            <Descriptor Poster={this.state.Poster}
            title={this.state.title}
            avgRating={this.state.avgRating} date={this.state.date}
            runtime={this.state.runtime}  Description={this.state.Description}
            />
          )
      }
      componentDidMount(){
          this.fetchUpcoming()
      }
}
export default UpcomingMovies;