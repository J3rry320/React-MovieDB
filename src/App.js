import React, {
  Component
} from 'react';

import './App.css';
import Home from './Components/home'
import Upcoming from "./Components/Upcoming";
import {Link,Route,Switch} from 'react-router-dom'
class App extends Component {

constructor(props){
  super(props);
  this.state={
    hiddenHome:false
  }
}






  render() {
let switchClass=this.state.hiddenHome?"d-none":"d-block"
    return (
      <div>

<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="nav navbar-nav ml-auto">
      <li className="nav-item active">
      <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link pr-2" to="/upcoming">Upcoming</Link>
      </li>

    </ul>

  </div>
</nav>

        <Switch>

            <Route path="/upcoming" component={Upcoming}/>


            <Route path="/" component={Home}/>

        </Switch>

          </div>





    );
  }
  componentDidMount(){
    //console.log(this.state.hidden)
   // this.fetchMovieID(550)

  }
}

export default App;