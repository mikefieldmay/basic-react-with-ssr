import React, { Suspense } from "react";
import { Switch, NavLink } from 'react-router-dom';
import Routes from './routes'
import { renderRoutes } from 'react-router-config'

const Loading = () => <div>Loading</div>

export const App = () => (
  <Suspense fallback={<Loading />}>
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
      {renderRoutes(Routes)}
    </Switch>
  </Suspense>
);