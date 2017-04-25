import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './containers/Home';
import Submit from './containers/Submit';

export default class App extends Component {
  render() {
    return (
      <Router>
  		<div>
  			<NavBar/>

  			<Route exact path="/" component={NavBar}></Route>
  			<Route path="/home" component={Home}></Route>
  			<Route path="/submit" component={Submit}></Route>

  		</div>
  	</Router>
    );
  }
}
