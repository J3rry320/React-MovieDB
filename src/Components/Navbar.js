import React from 'react';
import ReactDOM from 'react-dom';
import {Link,Route} from 'react-router-dom'
import Upcoming from "./Upcoming"
const Navbar=()=>{
    return(<div>


        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        <ul className="navbar-nav">
      <li className="nav-item active">

      <Link to="/upcoming">Dashboard</Link>

      </li>
      </ul>
        </nav>
            <div>
            <Route path="/upcoming" component={Upcoming}/>
          </div>
          </div>
    )

}
export default Navbar;