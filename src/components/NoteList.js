import React, { Component } from 'react';
import Relay from 'react-relay';
import Note from './Note';


class NoteList extends Component {
  render() {
    let notes = this.props.store.edges.map((elm, idx) => <Note key={idx} store={elm.node}/>);
    return(
      <div>
        <h1>Mentalnotes</h1>
        {notes} 
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
