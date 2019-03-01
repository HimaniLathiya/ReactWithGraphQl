import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import User from './User';

const Users = () => (
  <Query
    query={gql`
      {
        users {
            id
            name
            email
        }
    }   
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.users.map(({ id, name, email }) => (
        <div key={id}>
          <p>{`${name} by ${email}`}</p>
        </div>
      ));
    }}


     
  </Query>

  
);
export default Users;