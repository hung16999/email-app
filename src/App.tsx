import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import { routesMain } from "./routes/routes";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      {routesMain.map((route) => (
        <NavLink key={route.name} to={route.path} className="me-5">
          {route.name}
        </NavLink>
      ))}
      <div className="container">
        <Switch>
          {routesMain.map((route) => (
            <Route key={route.name} exact={route.exact} path={route.path}>
              {route.Component}
            </Route>
          ))}

          <Redirect to="/messages/inbox" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
