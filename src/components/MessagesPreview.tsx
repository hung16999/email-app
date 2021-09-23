import React from "react";
import { Table } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import messages from "../constants/messages.json";
import { Message } from "../interfaces/Message";

export const MessagesPreview = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const nameFolder = pathname.split("/")[2];

  const getMessages = (): Message[] => {
    return messages.filter((message) => message.folder === nameFolder);
  };

  return (
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
          {getMessages().map((message) => (
            <tr
              key={message._id}
              onClick={() => {
                history.push(`/messages/${nameFolder}/${message._id}`);
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
  );
};
