require("express-async-errors");
require("dotenv").config();

const express = require("express");
const connectDB = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const mainRouter = require("./routes/main");
const app = express();

// middleware
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1", mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
// port
const port = process.env.PORT || 3000;

const Start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`The server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

Start();
