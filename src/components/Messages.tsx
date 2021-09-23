import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Draffs } from "./folderMessages/Draffs";
import { Finance } from "./folderMessages/Finance";
import { Inbox } from "./folderMessages/Inbox";
import { Personal } from "./folderMessages/Personal";
import { Sent } from "./folderMessages/Sent";
import { Spam } from "./folderMessages/Spam";
import { Travel } from "./folderMessages/Travel";

export const Messages = () => {
  return (
    <BrowserRouter>
      <Link to="/messages/inbox">inbox</Link>
      <Link to="/messages/finance">finance</Link>
      <Link to="/messages/travel">travel</Link>
      <Link to="/messages/personal">personal</Link>
      <Link to="/messages/spam">spam</Link>
      <Link to="/messages/draffs">draffs</Link>
      <Link to="/messages/sent">sent</Link>

      <Switch>
        <Route path="/messages/inbox">
          <Inbox />
        </Route>
        <Route path="/messages/finance">
          <Finance />
        </Route>
        <Route path="/messages/travel">
          <Travel />
        </Route>
        <Route path="/messages/personal">
          <Personal />
        </Route>
        <Route path="/messages/spam">
          <Spam />
        </Route>
        <Route path="/messages/draffs">
          <Draffs />
        </Route>
        <Route path="/messages/sent">
          <Sent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
