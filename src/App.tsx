import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";

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

      <Switch>
        {routesMain.map((route) => (
          <Route key={route.name} exact={route.exact} path={route.path}>
            {route.Component}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
