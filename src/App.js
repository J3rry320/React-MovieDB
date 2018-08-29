import React, {
  Component
} from 'react';

import './App.css';
import Home from './Components/home'
import Upcoming from "./Components/Upcoming";
import {Link,Route} from 'react-router-dom'
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


        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        <ul className="navbar-nav">
      <li className="nav-item active">

      <Link to="/upcoming" onClick={console.log("clicked")}>Dashboard</Link>
      <Link to="/">Home</Link>
      </li>
      </ul>
        </nav>
            <div>
            <Route path="/upcoming" component={Upcoming}/>
          </div>
          <div className={switchClass}>
            <Route path="/" component={Home}/>
          </div>
          </div>





    );
  }
  componentDidMount(){
    //console.log(this.state.hidden)
   // this.fetchMovieID(550)

  }
}

export default App;