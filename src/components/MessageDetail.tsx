import React, { useEffect } from "react";
import { useLocation } from "react-router";

import messages from "../constants/messages.json";
import { Message } from "../interfaces/Message";

export const MessagesDetail = () => {
  const location = useLocation();
  const idMessage = location.pathname.split("/")[3];

  const getMessage = (): Message | undefined => {
    return messages.find((message) => message._id === idMessage);
  };

  const data = getMessage();

  return (
    <>
      <p>{data?.subject}</p>
      <p>{data?.from}</p>
      <p>{data?.date}</p>
      <p>{data?.body}</p>
    </>
  );
};
