import React, { Component } from 'react';
import FacebookEmoji from 'react-facebook-emoji';
import { Button, Header, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class Result extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jsonResponse: null,
      emotion: this.props.location.state ? this.props.location.state.emotion : 'yay',
      count: this.props.location.state ? this.props.location.state.count : 2,
    };
  }

  render() {
    return (
      <Segment textAlign='center' style={{height: '100vh'}}>
        <Segment style={{height: '70vh'}}>
          <Header content='Your Result!' />
            {this.state.emotion != null ?
              <FacebookEmoji type={this.state.emotion} size='xxxl' />
            :
              null
            }
        </Segment>
        <Segment style={{height: '20vh'}}>
          <Link to={{pathname: '/', state: { count: this.state.count }}}><Button primary color='blue' content='back' /></Link>
        </Segment>
      </Segment>
    );
  }

}
