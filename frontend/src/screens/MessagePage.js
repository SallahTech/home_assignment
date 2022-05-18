import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../components/UI/Card/Card";
import useApi from "../useApi/useApi";
import styles from "./MessagePage.module.css";

const MessagePage = () => {
  // const [message, setMessage] = useState({});
  // const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { loading, messageContent: message } = useApi(`/api/messages/${id}`);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(`/api/messages/${id}`);
  //     if (data) {
  //       setMessage(data);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  return (
    <Card>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className={styles.container}>
          <h4 className={styles.subject}>{message.subject}</h4>
          <div className={styles.message}>
            <p className={styles.content}>{message.content} </p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default MessagePage;
