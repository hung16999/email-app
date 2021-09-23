import React from "react";

import { MessagesBox } from "./MessagesBox";
import { MessagesPreview } from "./MessagesPreview";
import { MessagesDetail } from "./MessageDetail";

export const Messages = () => {
  return (
    <>
      <div className="d-flex">
        <MessagesBox />
        <MessagesPreview />
      </div>

      <MessagesDetail />
    </>
  );
};
