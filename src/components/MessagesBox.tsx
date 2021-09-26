import React from "react";
import { NavLink, useRouteMatch, Route } from "react-router-dom";
import MessagesPreview from "./MessagesPreview";

const MessagesBox = () => {
  const { url } = useRouteMatch();

  const folders = [
    "inbox",
    "finance",
    "travel",
    "personal",
    "spam",
    "draffs",
    "sent",
  ];

  return (
    <div className="d-flex">
      <div className="d-flex flex-column">
        {folders.map((folder) => (
          <NavLink key={folder} to={`${url}/${folder}`} className="m-2">
            {folder}
          </NavLink>
        ))}
      </div>

      <Route path={`${url}/:folder`}>
        <MessagesPreview />
      </Route>
    </div>
  );
};

export default MessagesBox;
