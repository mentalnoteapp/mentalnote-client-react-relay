import React, { Component } from 'react';
import Relay from 'react-relay';

import Note from './Note';


export class MentalNoteRoute extends Relay.Route {
  static routeName = 'MentalNoteRoute';
  static queries = {
    store: ((Component) => {
      // Component is our Item
      return Relay.QL`
      query Query {
        ${Component.getFragment('store')},
      }
    `}),
  };
}


export class App extends Component {
  render() {
    return (
      <div>
        <h1>Moin</h1>
        <Note/>
      </div>
    )
  }
}
