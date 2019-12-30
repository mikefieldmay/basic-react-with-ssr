import React from "react";
import { Switch, NavLink, Route } from "react-router-dom";
import Todos from "./Todos";
import { ThemeProvider, theTimesTheme, UnorderedList } from "newskit";

export const App = () => (
  <ThemeProvider theme={theTimesTheme}>
    <UnorderedList>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todos">Todos</NavLink>
      <NavLink to="/todos/posts">Posts</NavLink>
    </UnorderedList>

    <Switch>
      <Route path="/" exact component={() => <div>Home</div>} />
      <Route path="/todos" component={Todos} />
    </Switch>
  </ThemeProvider>
);
