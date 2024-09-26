import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

const AddUser = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const GetUser = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

function App() {
  const { data, loading, error, refetch } = useQuery(GetUser);

  const [addUser] = useMutation(AddUser, {
    onCompleted: () => {
      console.log("User added!");
      refetch();
    },
    onError: (error) => {
      console.log("Error adding user =>", error);
    },
  });

  const handleSubmit = () => {
    const name = "Cristiano";
    const email = "ronaldo@gmail.com";
    addUser({ variables: { name, email } });
  };

  return (
    <div>
      <p>GraphQL Demo Project Frontend</p>
      <button onClick={handleSubmit}>Add User</button>
      <ul>
        {data &&
          data.users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
