import React,{Component} from "react";
import ReactDOM from 'react-dom';

class List extends Component{
    constructor(props){
        super(props);
        this.state={
hide:""
        }
    }
    ChangeClass=(bool)=>{
        return bool?this.setState({hide:"d-none"}):this.setState({hide:"d-block list-group-item"})
    }
    render(){
         return (
            <li onClick={e=>this.handleCLick(e)} data-name={this.props.name}  data-id={this.props.id}  className={this.state.hide}>
        {this.props.name}

            </li>)
    }
    handleCLick(target){

      this.props.callback(target.currentTarget.dataset.name,target.currentTarget.dataset.id)
      this.ChangeClass(true)
      this.props.change(true)
    }
    componentDidMount(){

        this.ChangeClass(false)
    }

}







export default List;