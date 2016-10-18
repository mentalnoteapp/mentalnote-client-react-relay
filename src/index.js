import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

//import { App, NoteRoute } from './components/App';

class Note extends Component {
  render() {
    return (
      <h2>{this.props.title}</h2>
    )
  }
}

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
      fragment N on NoteNodeConnection {
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

class NoteRoute extends Relay.Route {
  static routeName = 'NoteRoute';
  static queries = {
    store: Component => {

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
