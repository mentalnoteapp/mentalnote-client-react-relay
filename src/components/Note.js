import React, { Component } from 'react';
import Relay from 'react-relay';


class Note extends Component {
  render() {
    return (
      <h2>{this.props.title}</h2>
    )
  }
}

export default Note;
