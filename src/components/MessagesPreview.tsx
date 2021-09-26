import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Route, useHistory, useParams, useRouteMatch } from "react-router";
import messages from "../constants/messages.json";
import { Message } from "../interfaces/Message";
import MessagesDetail from "./MessageDetail";

const MessagesPreview = () => {
  const { folder } = useParams<{ folder: string }>();
  const [messagesList, setMessagesList] = useState<Message[]>([]);
  const { url } = useRouteMatch();
  const history = useHistory();

  const getMessages = () => {
    const data = messages.filter((message) => message.folder === folder);
    setMessagesList(data);
  };

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folder]);

  return (
    <div className="d-flex flex-column">
      <div className="table-message">
        <Table>
          <thead>
            <tr>
              <th>Sender</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {messagesList.map((message) => (
              <tr
                key={message._id}
                onClick={() => {
                  history.push(`${url}/${message._id}`);
                }}
              >
                <td>{message.from}</td>
                <td>{message.subject}</td>
                <td>{message.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Route path={`${url}/:id`}>
        <MessagesDetail />
      </Route>
    </div>
  );
};

export default MessagesPreview;
