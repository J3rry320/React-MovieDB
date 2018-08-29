import React,{Component} from 'react';
import Search from "./SearchBar";
import axios from 'axios';
import Card from './Desricptor'
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
          movie: [],
         data:[],
         hidden:false
        }
        this.Search = this.Search.bind(this)
        this.fetchMovieID=this.fetchMovieID.bind(this)
    }

fetchMovieByDescription(){

    let url=`https://api.themoviedb.org/3/discover/movie?api_key=b1ceec131e81ece0cacf2f641d01910a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878`;
axios.get(url).then(
    result=>{
        console.log(result.data)
    }
).catch(
    error=>{
        console.log(error)
    }
)
}

    fetchMovieID(movieID) {
        let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=b1ceec131e81ece0cacf2f641d01910a&append_to_response=credits`


        this.setState({hidden:true})
        axios.get(url).then(result => {
    console.log(result.data)
          this.setState({data:[result.data]})

        }).catch(error => {
            console.log(error)
          }

        )
      }
      Search(movieName) {

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b1ceec131e81ece0cacf2f641d01910a&query=${movieName}`).then(result => {

          this.setState({
            movie: []
          });


          result.data.results.forEach(element => {

            this.setState({
              movie: [...this.state.movie, {

                "title": element.title,
                "id": element.id
              }]
            })


          });



        }).catch(error => {
          console.log(error)
        })

      }
      render(){
          return(
              <div>
            <div className="container">
            <div className="row">

            <div className="col-sm-12">
            <Search callback = {
                    this.Search
                  }
                  item = {
                    this.state.movie
                  }
                  callbackForList = {
                    this.fetchMovieID
                  }
                  hide={this.state.hidden}
                  />

            </div>
            </div>



              </div>
              <Card data={this.state.data}/>
            </div>
          )
      }
      componentDidMount(){
          this.fetchMovieByDescription()
      }
}
export default Home