// app.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// app.js
const cors = require("cors"); // Import the cors package

const usersRouter = require("./routes/users");

const app = express();
const port = 8080;

mongoose
  .connect(
    "mongodb+srv://employee-management-app:employee-management@employee-management-app.tj4rfgq.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });

app.use(bodyParser.json());
app.use(cors());
app.use("/users", usersRouter);

// Import and use your routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
