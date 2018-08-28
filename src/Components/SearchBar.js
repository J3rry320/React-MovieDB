import axios from 'axios';
import React, {
    Component
} from 'react';
import {
    debounce
} from 'lodash'

import List from "./SearchList";


/*$('.typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 2
  }, {source: suggests.ttAdapter()}).on('typeahead:selected', function(obj, datum) {
    this.fetchMovieID(datum.id)
  }.bind(this));*/
let title={
movie:[]
}
let object={}

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieName: ""
        }
        this.Search=this.Search.bind(this);
        this.serachTermChange = this.serachTermChange.bind(this)
    }
    render() {
        return (
           <div>

            <input type = "search"
            value = {
                this.state.movieName
            }
            className = "typehead"
            onChange = {
             event => this.serachTermChange(event.target.value)
            }
            />
            <List item={title.movie}/>

            </div>

        )
    }
    Search () {

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b1ceec131e81ece0cacf2f641d01910a&query=${this.state.movieName}`).then(result => {

        console.log(result)
        title.movie.length=0
        result.data.results.forEach(element => {
        object={

            "title":element.title,
            "id":element.id
        }
        title.movie.push(object)

            });


        }).catch(error => {
            console.log(error)
        })

    }


    serachTermChange(term) {
        console.log(term)
        if(term==null||term==""){
        title.movie.length=0
        }
        this.setState({
            movieName: term
        })
this.Search()



    }
    componentDidMount() {

   // this.Search("The wolf of wall street")
        // this.fetchMovieID(550)

    }

}


export default SearchBar