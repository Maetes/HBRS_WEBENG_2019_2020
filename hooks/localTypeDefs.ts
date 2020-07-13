import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    getCurrentUser: CurrentUser!
    getMyTasks: [Task!]!
  }

  type CurrentUser {
    email: String!
    nachname: String!
    title: String!
    id: ID!
    __typename: String!
  }

  type Task {
    __typename: String!
    name: String!
    beschreibung: String!
    code: String!
    click: String!
  }

  extend type Mutation {
    setCurrentUser(
      email: String!
      nachname: String!
      title: String!
      id: ID!
    ): CurrentUser!
    setMyTasks(myTasks: [Task!]!): [Task!]!
  }
`;
