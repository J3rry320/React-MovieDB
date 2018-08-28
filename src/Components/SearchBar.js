
import React, {
    Component
} from 'react';
import {
    debounce
} from 'lodash'

import List from "./SearchList";





class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieName: "",

        }

        this.serachTermChange = this.serachTermChange.bind(this)
    }

    render() {
        return (
           <div>

            <input type = "search"
            value = {
                this.state.movieName
            }

            onChange = {
             event => this.serachTermChange(event.target.value)
            }
            />
     <List item={this.props.item} callback={this.props.callbackForList}/>

            </div>

        )
    }



    serachTermChange(term) {

if(term===""||term===null){
    this.setState()
}
        this.setState({
            movieName: term
        })
       this.props.callback(this.state.movieName)



    }
    componentDidMount() {

   // this.Search("The wolf of wall street")
        // this.fetchMovieID(550)

    }

}


export default SearchBar