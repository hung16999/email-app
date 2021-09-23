import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import messages from "../constants/messages.json";
import { Message } from "../interfaces/Message";

export const MessagesPreview = () => {
  const { pathname } = useLocation();
  const folder = pathname.split("/")[2];

  const getMessages = (): Message[] => {
    return messages.filter((message) => message.folder === folder);
  };

  console.log(getMessages());

  return (
    <>
      <h3>Mess preview</h3>
    </>
  );
};
