import React, { Component } from 'react';
import Relay from 'react-relay';
import Note from './Note';


class NoteList extends Component {
  render() {
    return(
      <div>
        {this.props.store.edges.map((elm) => <Note key={elm.node.id} title={elm.node.title}/>)} 
      </div>
    )
  }
}

NoteList = Relay.createContainer(NoteList, {
  fragments: {
    store: () => Relay.QL`
      fragment on NoteNodeConnection {
        edges {
          node{
            id
            title
            note
          }
        }
      }
    `
  }
});

export default NoteList;
