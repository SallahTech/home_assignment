import React from "react";
import Card from "../components/UI/Card/Card";
import Message from "../components/Message";

const InboxPage = ({ messages }) => {
  return (
    <>
      <h3>Messages</h3>
      <Card>
        <div className="messages">
          <div className="message">
            {messages.map((message) => (
              <Message key={message._id} messageContent={message} />
            ))}
          </div>
        </div>
      </Card>
    </>
  );
};

export default InboxPage;
