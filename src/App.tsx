import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import { Contacts } from "./components/Contacts";
import { Messages } from "./components/Messages";
import { Preferences } from "./components/Preferences";

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/messages">Messages</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/preferences">Preferences</Link>

      <Switch>
        <Route exact path="/messages">
          <Messages />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/preferences">
          <Preferences />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
