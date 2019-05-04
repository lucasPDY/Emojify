import React, { Component } from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class About extends Component {

  render() {
    return (
      <Segment textAlign='center'>
        <Segment>
          <Header content='About' />
        </Segment>
        <Segment>
          <p>Lucas De Yuan Phang | Serene Chow Yuen Shan | Ivan Ken Weng Chee | Yuting Lin</p>
        </Segment>
        <Segment>
          <Link to='/'><Button content='Back' /></Link>
        </Segment>
      </Segment>
    );
  }

}
