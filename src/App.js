import React, { Component, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import Picture from './Picture';
import Home from './Home';
import Result from './Result';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/' component={props => <Home {...props} />}/>
          <Route exact path='/about' component={props => <About {...props} />}/>
          <Route exact path='/picture' component={props => <Picture {...props} />}/>
          <Route exact path='/result' component={props => <Result {...props} />}/>
        </Suspense>
      </BrowserRouter>
    );
  }

}
