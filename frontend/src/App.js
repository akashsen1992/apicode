import React from "react";
import ReactDOM from "react-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import AddUser from "./Component/AddUser";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './Component/Common/Navigation';
import Imageuploade from "./Component/Common/Imageuploade";


const App= () => {
  return (
    <>
    <div className="container">
        <Router>
        <Navigation />
          <Switch>
          <Route exact component={Home}  path="/" />
           <Route exact  path="/about" component={About} />          
           <Route  exact path='/adduser'  component={AddUser}></Route>
           <Route exact path='/imageuploade' component={Imageuploade} ></Route>
           </Switch>
        </Router>
      
    </div>
    </>
  );
 
}

export default App;