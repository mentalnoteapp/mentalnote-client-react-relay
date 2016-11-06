import React, { Component } from 'react';
import Relay from 'react-relay';

import NoteList from './NoteList';


export class App extends Component {
  render() {
    return (
      <div>
        <h1>Mentalnotes</h1>
        <NoteList />
      </div>
    )
  }
}
