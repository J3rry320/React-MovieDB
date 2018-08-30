
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
            movieName:"",
            hide:this.props.hide

        }

        this.serachTermChange = this.serachTermChange.bind(this)
    }

    render() {
        let value= this.props.value

        return (

  <div>

<input type = "search"
className="form-control"
placeholder="Type the Movie Name"

value = {
   value||this.state.movieName
}
onFocus={this.props.changeInput}

onChange = {
 event => this.serachTermChange(event.target.value,value)
}
/>
<List item={this.props.item} onchange={this.props.onchange} hide={this.props.hide} callback={this.props.callbackForList}/>

</div>



        )
    }

componentWillReceiveProps(props){
//this.setState({hide:props.hide})
}

    serachTermChange(term,value) {
        this.props.onchange(false)
if(term===""||term===null){

this.setState({hide:true})
}
else{
    this.setState({hide:false})
}
this.setState({movieName:term})

       this.props.callback(term)



    }
    componentDidMount() {

   // this.Search("The wolf of wall street")
        // this.fetchMovieID(550)

    }

}


export default SearchBar