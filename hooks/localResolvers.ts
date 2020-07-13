import { InMemoryCache } from 'apollo-cache-inmemory';
import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_RESOLVER,
  MY_TASKS,
} from './localDocuments';

export const resolvers = {
  Query: {
    getCurrentUser: (_: {}, args: any, { cache }: { cache: InMemoryCache }) => {
      console.log('Resolver Query triggered');
      const { currentUser }: any = cache.readQuery({
        query: GET_CURRENT_USER_RESOLVER,
      });
      console.log('this is the user', currentUser);
      const data: any = {
        ...currentUser,
      };
      return data;
    },
    getMyTasks: (_: [], args: any, { cache }: { cache: InMemoryCache }) => {
      console.log('getMyTasksQuery');
      const { myTasks }: any = cache.readQuery({ query: MY_TASKS });
      return myTasks;
    },
  },
  Mutation: {
    setCurrentUser: (
      _: {},
      variables: any,
      { cache }: { cache: InMemoryCache }
    ) => {
      const { currentUser }: any = cache.readQuery({ query: GET_CURRENT_USER });
      console.log('mutationResolver Triggered');
      console.log(
        'olduser',
        currentUser.email,
        currentUser.nachname,
        currentUser.title
      );

      const newUser = {
        email: variables.email,
        title: variables.title,
        nachname: variables.nachname,
        __typename: 'CurrentUser',
      };

      console.log('newUser', newUser);
      const erg = cache.writeQuery({
        query: GET_CURRENT_USER,
        data: newUser,
      });
      return newUser;
    },

    //SET TASKS INTO GLOBAL STATE
    setMyTasks: (
      _: {},
      variables: any,
      { cache }: { cache: InMemoryCache }
    ) => {
      console.log('local task resolver');
      console.log('variables:', variables.myTasks);
      cache.writeQuery({
        query: MY_TASKS,
        data: variables,
      });
    },
  },
};
