import React, { Component } from 'react';
import logo from './logo.svg';
import FacebookEmoji from 'react-facebook-emoji';
import { Button, Header, Image, Segment } from 'semantic-ui-react';
import { Link, Redirect } from "react-router-dom";

export default class Result extends Component {

  render() {
    return (
      <Segment textAlign='center' style={{height: '100vh'}}>
        <Segment style={{height: '70vh'}}>
          <Header content='Your Result!' />
          <FacebookEmoji type='wow' size='xxxl' />
        </Segment>
        <Segment style={{height: '20vh'}}>
          <Link to='/'><Button primary color='blue' content='back' /></Link>
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