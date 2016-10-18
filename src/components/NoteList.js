import React, { Component } from 'react';

import Note from './Note';


class NoteList extends Component {
  render() {
    return(
      <div> NoteList </div>
    )
  }
}


//NoteList = Relay.createContainer(NoteList, {
  //fragments: {
    //store: () => Relay.QL`
      //fragment on NoteNode {
        //item(id: 8863) {
          //title,
          //score,
          //url
          //by {
            //id
          //}
        //}
      //}
    //`,
  //},
//});

export default NoteList;
