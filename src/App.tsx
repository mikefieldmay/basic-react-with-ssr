import React from "react";
import { Switch, NavLink, Route } from 'react-router-dom';
import Todos from "./Todos";

export const App = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/todos">Todos</NavLink>
      </li>
      <li>
        <NavLink to="/todos/posts">Posts</NavLink>
      </li>
    </ul>

    <Switch>
      <Route path="/" exact component={() => <div>Home</div>}/>
      <Route path="/todos" component={Todos}/>
    </Switch>
  </div>)