import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import messages from "../constants/messages.json";
import { Message } from "../interfaces/Message";

const MessagesDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState<Message>();

  const getMessage = () => {
    const messageFinded = messages.find((message) => message._id === id);
    setMessage(messageFinded);
  };

  useEffect(() => {
    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="mt-5">
      {message && (
        <>
          <p>{message.subject}</p>
          <p>{message.from}</p>
          <p>{message.date}</p>
          <p>{message.body}</p>
        </>
      )}
    </div>
  );
};

export default MessagesDetail;
