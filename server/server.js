// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const connectionDB = require("./db/connection");

// const app = express();

// const db1Url = "mongodb://127.0.0.1:27017/fogCityMedDB";

// var corsOptions = {
//   orgigin: "http://localhost:8081",
// };
// app.use(cors(corsOptions));

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));

// //connection to db

// const connectDb = connectionDB(db1Url);

// function findPatinet(req, res) {
//   connectDb.find().then(res);
// }

// app.get("/", (req, res) => {
//   res.json({ message: "welcome to fcmc webside" });
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, (req, res) => {
//   console.log(`server is running on Port ${PORT}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const db = require("./models/db");
mongoose
  .connect("mongodb://127.0.0.1:27017/fogCityMedDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit();
  });

const app = express();

app.use(cors(corsOptions));

var corsOptions = {
  orgigin: "http://localhost:3000",
};

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to fog city medical application." });
});

const PORT = process.env.PORT || 49382;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
