import { Link } from "react-router-dom";
import Card from "../components/UI/Card/Card";
import styles from "./HomePage.module.css";

const HomePage = ({ data }) => {
  const numberOfMessages = data[0].messages.length;

  const numberOfUnreadMessages = data[0].messages.reduce(
    (accumulator, currentValue, index) => {
      if (!currentValue.isRead) {
        accumulator += 1;
      } else {
        accumulator += 0;
      }
      return accumulator;
    },
    0
  );

  return (
    <Card>
      <div className={styles.container}>
        <p>Hello {`${data[0].firstName}`}</p>
        <h3>
          You have {`${numberOfUnreadMessages}`} unread messages out of{" "}
          {`${numberOfMessages}`} total
        </h3>
        <Link to="/inbox" className={styles.button}>
          View Messages
        </Link>
      </div>
    </Card>
  );
};

export default HomePage;
