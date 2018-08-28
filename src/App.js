import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./Components/SearchBar";
import axios from 'axios';
import Card from './Components/Desricptor'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
     data:[],
     hidden:false
    }
    this.Search = this.Search.bind(this)
    this.fetchMovieID=this.fetchMovieID.bind(this)
  }


fetchUpcoming(){
  axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=b1ceec131e81ece0cacf2f641d01910a&language=en-US&page=1&append_to_response=credits").then(
    result=>{
      console.log(result)
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


  render() {

    return (

<div>
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
<Card data={this.state.data}/>
</div>

    );
  }
  componentDidMount(){
    console.log(this.state.hidden)
   // this.fetchMovieID(550)
    this.fetchUpcoming()
  }
}

export default App;