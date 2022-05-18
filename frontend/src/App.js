import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import InboxPage from "./screens/InboxPage";
import MessagePage from "./screens/MessagePage";
import useApi from "./useApi/useApi.js";
import "./App.css";

const App = () => {
  const { loading, messageContent } = useApi("/api/users");

  if (loading) return <h4>Loading...</h4>;

  return (
    <div className="App">
      {messageContent && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage data={messageContent} />} />
            <Route
              path="/inbox"
              element={<InboxPage messages={messageContent[0].messages} />}
            />
            <Route path="/message/:id" element={<MessagePage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
