import React from "react";
import { Link } from "react-router-dom";
import styles from "./Message.module.css";

const Message = ({ messageContent }) => {
  const shortMessage = messageContent.content.substring(0, 15) + "...";
  return (
    <div>
      <div className={styles.messageContainer}>
        <Link to={`/message/${messageContent._id}`} className={styles.link}>
          <h4 className={styles.subject}>{messageContent.subject}</h4>
          <p className={styles.content}>{shortMessage} </p>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Message;
