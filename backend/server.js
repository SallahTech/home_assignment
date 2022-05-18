import express, { json, urlencoded } from "express";
import { config } from "dotenv";
import mongoose from "mongoose";

config();
const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
const port = 8000 || process.env.PORT;

mongoose.connect("mongodb://localhost:27017/messageDB");

// create a schema
const messageSchema = {
  subject: String,
  content: String,
  isRead: Boolean,
};

const userSchema = {
  firstName: { type: String },
  lastName: { type: String },
  messages: [messageSchema],
};

const Message = mongoose.model("message", messageSchema);
const User = mongoose.model("user", userSchema);

const sampleMessage1 = new Message({
  subject: "Hi again",
  content: "Just wanted to check on you",
  isRead: true,
});

const sampleMessage2 = new Message({
  subject: "Hi friend",
  content: "Just wanted to let you know I'm good",
  isRead: false,
});

const defaultMessage = [sampleMessage1, sampleMessage2];

const defaultUser = new User({
  firstName: "Baboucarr",
  lastName: "Smith",
  messages: defaultMessage,
});

app.get("/api/users", (req, res) => {
  User.find({}, (error, foundUsers) => {
    if (foundUsers.length === 0) {
      User.insertMany([defaultUser], (error) => {
        if (error) console.log("Insertion failed");
        else console.log("successfully inserted user");
      });
    } else {
      res.send(foundUsers);
    }
  });
});

app.get("/api/messages", (req, res) => {
  Message.find({}, (error, data) => {
    if (data.length === 0) {
      Message.insertMany(defaultMessage, (erro) => {
        if (error) console.log(erro);
        else console.log("success");
      });
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.get("/api/messages/:id", (req, res) => {
  const id = req.params.id;
  Message.findById(id, (error, message) => {
    if (message) {
      res.send(message);
    } else {
      res.status(404).send("Messages not found");
    }
  });
});

app.post("/", (req, res) => {
  const messae = req.body.newMessage;

  const newMessage = new Message(message);

  newMessage.save();

  res.redirect("/");
});

app.listen(port, () => {
  console.log(
    `Server is runing on PORT ${port} in ${process.env.NODE_ENV} mode.`
  );
});
