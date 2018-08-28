import React,{ Component } from "react";
import Cards from "./Cards";
class Cards extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    render(){
        return(
            <div className="jumbotron jumbotron-fluid">

  <div className="container">
    <h1 className="display-4">Fluid jumbotron</h1>

    <div className="row">
            <div className="col-md-4 col-sm-12">
<Cards/>
            </div>
            <div className="col-md-8 col-sm-12">

            </div>
            </div>
  </div>
</div>
        )
    }
}