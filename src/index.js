import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

//import { App, NoteRoute } from './components/App';

import NoteList from './components/NoteList';


class NoteRoute extends Relay.Route {
  static routeName = 'NoteRoute';
  static queries = {
    store: Component => {

      debugger
      return Relay.QL`
      query {
        notes {
          ${Component.getFragment('store')}
        }
      }
    `},
  };
}

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8000/graphql')
);

let rootComponent = <Relay.RootContainer
  Component={NoteList}
  route={new NoteRoute()} />;

ReactDOM.render(
  rootComponent,
  document.getElementById('root')
);
