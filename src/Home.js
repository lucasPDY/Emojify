import React, { Component } from 'react';
import FacebookEmoji from 'react-facebook-emoji';
import { Button, Header, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: this.props.location.state ? this.props.location.state.count : 1,
    };
  }

  render() {
    return (
      <Segment textAlign='center' style={{height: '100vh'}}>
        <Segment style={{height: '70vh'}}>
          <Header content='Emojify' />
          <div>
            <FacebookEmoji type='like' size='l' />
            <FacebookEmoji type="love" size='l' />
          </div>
          <div>
            <FacebookEmoji type="wow" size='l' />
            <FacebookEmoji type="yay" size='l' />
            <FacebookEmoji type="angry" size='l' />
          </div>
          <div>
            <FacebookEmoji type="haha" size='l' />
            <FacebookEmoji type="sad" size='l' />
          </div>
        </Segment>
        <Segment style={{height: '20vh'}}>
          <Link to={{pathname: '/picture', state: { count: this.state.count }}}><Button primary color='blue' content='start' /></Link>
          <Link to='/about'><Button primary color='blue' content='about' /></Link>
        </Segment>
      </Segment>
    );
  }

}
