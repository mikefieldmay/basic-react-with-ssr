import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Route } from "react-router-dom";
import gql from "graphql-tag";
import { Posts } from "./Posts";
import { H1, P, ThemeProvider, theTimesTheme, UnorderedList } from "newskit";

const query = gql`
  query todos {
    todos @rest(type: "Todos", path: "todos") {
      id
      title
    }
  }
`;

const Todos = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <P>Loading...</P>;
  if (error) return <P>Error :(</P>;
  return (
    <ThemeProvider theme={theTimesTheme}>
      <H1>TODOS</H1>
      {data.todos.slice(0, 10).map(todo => (
        <UnorderedList key={todo.id}>{todo.title}</UnorderedList>
      ))}
      <Route path="/todos/posts" component={Posts} />
    </ThemeProvider>
  );
};
export default Todos;
