import React from "react";
import { StaticRouter } from "react-router-dom";
import { getDataFromTree } from "@apollo/react-ssr";

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import { App as Layout } from '../src/App'

import { RestLink } from 'apollo-link-rest'

export const renderServerApp = req => {
  const client = new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link: new RestLink({
      uri: "https://jsonplaceholder.typicode.com/",
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache: new InMemoryCache(),
  });

  const context = {}

  const App = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <Layout />
      </StaticRouter>
    </ApolloProvider>
  );

  return getDataFromTree(App).then((app) => ({app, context: client.extract()}))
};