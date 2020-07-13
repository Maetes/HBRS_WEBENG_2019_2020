import { IncomingMessage, ServerResponse } from 'http';
import { useMemo } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { getCookie } from '../util/frontend/cookieHandler';

// import { resolvers } from './localResolvers';
// import { typeDefs } from './localTypeDefs';
// import {
//   CREATE_USER,
//   GET_CURRENT_USER,
//   SET_CURRENT_USER,
//   ALL_USERS,
// } from './localDocuments';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};

function createIsomorphLink(context: ResolverContext = {}) {
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('apollo-link-schema');
    const { schema } = require('../pages/api/index');
    return new SchemaLink({ schema, context });
  } else {
    const { setContext } = require('apollo-link-context');
    const authLink = setContext((_: any, { headers }: any) => {
      const token = getCookie('user', () => null);
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });
    const { HttpLink } = require('apollo-link-http');
    const httpLink = new HttpLink({
      uri: '/api',
      credentials: 'same-origin',
    });
    return authLink.concat(httpLink);
  }
}

function createApolloClient(context?: ResolverContext) {
  let cache = new InMemoryCache();
  // cache.writeData({
  //   data: {
  //     currentUser: {
  //       __typename: 'CurrentUser',
  //       email: '',
  //       nachname: '',
  //       title: '',
  //       id: '',
  //     },
  //   },
  // });
  let client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(context),
    cache: cache /*new InMemoryCache(),*/,
    // typeDefs,
    // resolvers,
  });
  return client;
}

export function initializeApollo(
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext
) {
  const _apolloClient = apolloClient ?? createApolloClient(context);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
