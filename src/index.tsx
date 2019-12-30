import React from "react";
import ReactDom from "react-dom";
import { client } from "./apis";
import { ApolloProvider } from "@apollo/react-hooks";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

ReactDom.hydrate(<ApolloApp />, document.getElementById("root"));
