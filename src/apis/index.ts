import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

import { RestLink } from "apollo-link-rest";

declare global {
  interface Window {
    __APOLLO_STATE__: any;
  }
}

const restLink = new RestLink({ uri: "https://jsonplaceholder.typicode.com/" });

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  ssrForceFetchDelay: 100
});
