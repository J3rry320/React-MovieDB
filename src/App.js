import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./Components/SearchBar";
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    }
    this.Search = this.Search.bind(this)
  }
  fetchMovieID(movieID) {
    let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=b1ceec131e81ece0cacf2f641d01910a`
    axios.get(url).then(result => {
      console.log(result)
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
    console.log(this.state.movie)
    return (


      <Search callback = {
        this.Search
      }
      item = {
        this.state.movie
      }
      callbackForList = {
        this.fetchMovieID
      }
      />

    );
  }
}

export default App;