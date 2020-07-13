import gql from 'graphql-tag';

export const MY_TASKS = gql`
  query getMyTasks @client {
    myTasks
  }
`;

export const SET_TASKS = gql`
  mutation setMyTasks($myTasks: Task) {
    setMyTasks(myTasks: $myTasks) @client {
      myTasks
    }
  }
`;

//Server
export const ALL_USERS = gql`
  query allUsersQuery {
    allUsers {
      title
      nachname
      email
      id
      __typename
    }
  }
`;

//client resolver only
export const GET_CURRENT_USER_RESOLVER = gql`
  query GetCurrentUserResolverQuery {
    currentUser @client(always: true) {
      email
      nachname
      title
      __typename
      id
    }
  }
`;

//client
export const GET_CURRENT_USER = gql`
  query GetCurrentUserQuery {
    getCurrentUser @client(always: true) {
      email
      nachname
      title
      __typename
      id
    }
  }
`;

//Client - für login
export const SET_CURRENT_USER = gql`
  mutation SetCurrentUserMutation(
    $email: String!
    $nachname: String!
    $title: String!
    $id: String!
  ) {
    setCurrentUser(email: $email, nachname: $nachname, title: $title) @client {
      email
      title
      nachname
      id
      __typename
    }
  }
`;

//Server
export const CREATE_USER = gql`
  mutation CreateUserMutation(
    $email: String!
    $nachname: String!
    $title: String!
    $password: String!
  ) {
    createUser(
      email: $email
      nachname: $nachname
      title: $title
      password: $password
    ) {
      __typename
      email
      nachname
      title
      password
      id
    }
  }
`;
