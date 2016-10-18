import React, { Component } from 'react';
import Relay from 'react-relay';


class Note extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.store.title}</h2>
        <p>{this.props.store.note}</p>
      </div>
    )
  }
}

Note = Relay.createContainer(Note, {
  fragments: {
    store: () => Relay.QL`
      fragment on NoteNode {
        id
        title
        note
      }
    `
  }
});

export default Note;
