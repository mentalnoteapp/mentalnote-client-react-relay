import React, { Component } from 'react';
import Relay from 'react-relay';


class Note extends Component {
  render() {
    return(
      <div> {this.props.store.title} </div>
    )
  }
}

Note = Relay.createContainer(Note, {
  fragments: {
    store: () => Relay.QL`
      fragment on Query {
        note(id: "Tm90ZU5vZGU6Mg==") {
          id
          title
          note
        }
      }
    `
  }
});

export default Note;
