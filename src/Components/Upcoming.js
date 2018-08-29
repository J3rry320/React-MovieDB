import React,{Component} from 'react';
import axios from 'axios';
import Descriptor from "./Media"
import Stars from './starcounter'
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

              elements.push({
                    title:element.title,
                    Description:element.overview,
                    Poster:"http://image.tmdb.org/t/p/w185_and_h278_bestv2//"+element.poster_path,

                    date:element.release_date,

                    avgRating:element.vote_average,

                    popularity:element.popularity,
                    background:"http://image.tmdb.org/t/p/w185_and_h278_bestv2//"+element.backdrop_path,
                    language:element.original_language,
                    voteCount:element.vote_count,

                    id:element.id,//All are array from here

                    genre:element.genre_ids,





                })
                            })
          }
        )
      }
      render(){
const items=elements.map(items=>{
    return (  <li className="media" data-id={items.id} key={items.id}>
    <img className="mr-3" src={items.Poster} alt="Generic placeholder image"/>
    <div className="media-body">
      <h5 className="mt-3 mb-1">{items.title}</h5>
      <br/>
      <span className="left-span">

      <Stars total={items.avgRating} /></span><br/>
      <span>{items.date}</span>
      <br/>
    {items.Description}
    </div>
  </li>)
})
          return(
        <div>


            {items}
        </div>
          )
      }
      clickFunction(){

      }
      componentDidMount(){
          this.fetchUpcoming()
      }
}
export default UpcomingMovies;