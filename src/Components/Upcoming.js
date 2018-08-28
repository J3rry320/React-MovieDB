import React,{Component} from 'react';
import axios from 'axios'
class UpcomingMovies extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    fetchUpcoming(){
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=b1ceec131e81ece0cacf2f641d01910a&language=en-US&page=1&append_to_response=credits").then(
          result=>{
            console.log(result)
          }
        )
      }
      render(){
          return(
            <h1>Fuck</h1>
          )
      }
      componentDidMount(){
          this.fetchUpcoming()
      }
}
export default UpcomingMovies;