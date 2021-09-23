import React from "react";
import { NavLink } from "react-router-dom";

export const MessagesBox = () => {
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
    <div className="d-flex flex-column">
      {folders.map((folder) => (
        <NavLink key={folder} to={`/messages/${folder}`} className="m-2">
          {folder}
        </NavLink>
      ))}
    </div>
  );
};
