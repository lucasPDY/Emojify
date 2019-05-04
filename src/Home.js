import React, { Component } from 'react';
import logo from './logo.svg';
import FacebookEmoji from 'react-facebook-emoji';
import { Button, Header, Image, Segment } from 'semantic-ui-react';
import { Link, Redirect } from "react-router-dom";

export default class Home extends Component {

  render() {
    return (
      <Segment textAlign='center' style={{height: '100vh'}}>
        <Segment style={{height: '70vh'}}>
          <Header content='Reaction Recommendation' />
          <div className="App-logo" style={{height: '50vh'}}>
            <FacebookEmoji type='like' size='xxxl' />
          </div>
        </Segment>
        <Segment style={{height: '20vh'}}>
          <Link to='/picture'><Button primary color='blue' content='start' /></Link>
          <Link to='/about'><Button primary color='blue' content='about' /></Link>
        </Segment>
      </Segment>
    );
  }

}

// <FacebookEmoji type="love"/>
// <FacebookEmoji type="wow"/>
// <FacebookEmoji type="yay"/>
// <FacebookEmoji type="angry"/>
// <FacebookEmoji type="haha"/>
// <FacebookEmoji type="sad"/>