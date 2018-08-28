import React,{ Component } from "react";
import Card from "./Cards";

let element=null;

class Cards extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentWillReceiveProps(props){

        props.data.forEach(element => {
            console.log(element)
            this.setState({
                title:element.title,
                Description:element.overview,
                Poster:"http://image.tmdb.org/t/p/w185//"+element.poster_path

            })
        });
                //this.extractData(this.state.data)

            }
    render(){
        return(
            <div className="jumbotron jumbotron-fluid">

  <div className="container">
    <h1 className="display-4">Fluid jumbotron</h1>

    <div className="row">
            <div className="col-md-4 col-sm-12">
<Card title={this.state.title} Image={this.state.Poster} description={this.state.Description}/>
            </div>
            <div className="col-md-8 col-sm-12">

            </div>
            </div>
  </div>
</div>
        )
    }



}
export default Cards;