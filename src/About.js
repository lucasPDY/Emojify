import React, { Component } from 'react';
import logo from './logo.svg';
import FacebookEmoji from 'react-facebook-emoji';
import { Button, Header, Segment } from 'semantic-ui-react';
import {
    Link,
    Redirect
} from "react-router-dom";

export default class About extends Component {

  render() {
    return (
      <Segment textAlign='center'>
        <Segment>
          <Header content='About' />
        </Segment>
        <Segment>
          <p>Ivan Ken Weng Chee | Yuting Lin</p>
        </Segment>
        <Segment>
          <Link to='/'><Button content='Back' /></Link>
        </Segment>
      </Segment>
    );
  }

}
