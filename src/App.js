import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Users from "./Users";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app</h2>
        </div>
        <div>
        <Users />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
