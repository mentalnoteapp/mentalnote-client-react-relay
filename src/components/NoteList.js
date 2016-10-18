import React, { Component } from 'react';
import Relay from 'react-relay';
import Note from './Note';


class NoteList extends Component {
  render() {
    return(
      <div>
        {this.props.store.edges.map((elm, idx) => <Note key={idx} store={elm.node}/>)} 
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
            ${Note.getFragment('store')}
          }
        }
      }
    `
  }
});

export default NoteList;
