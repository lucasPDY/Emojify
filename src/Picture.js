import React, { Component } from 'react';
import logo from './logo.svg';
import FacebookEmoji from 'react-facebook-emoji';
import { Button, Header, Image, Segment } from 'semantic-ui-react';
import { Link, Redirect } from "react-router-dom";
import ImageUploader from 'react-images-upload';
import WebcamCapture from './WebcamCapture';

export default class Picture extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  render() {
    return (
      <Segment textAlign='center' style={{height: '100vh'}}>
        <Segment>
          <Header content='Take a photo!' />
        </Segment>
        <Segment>
          <WebcamCapture />
        </Segment>
        <Segment>
          <Link to='/result'><Button content='Result' /></Link>
          <Link to='/'><Button content='Back' /></Link>
        </Segment>
      </Segment>
    );
  }

}
