
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

            hide:false

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
     <List item={this.props.item} hide={this.state.hide} callback={this.props.callbackForList}/>

            </div>

        )
    }

componentWillReceiveProps(props){
//this.setState({hide:props.hide})
}

    serachTermChange(term) {

if(term===""||term===null){
this.setState({hide:true})
}
else{
    this.setState({hide:false})
}

       this.props.callback(term)



    }
    componentDidMount() {

   // this.Search("The wolf of wall street")
        // this.fetchMovieID(550)

    }

}


export default SearchBar