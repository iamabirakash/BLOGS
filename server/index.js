const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const { connectDb } = require("./connection");

require("dotenv").config();

const app = express();
const port = 5000;

connectDb();

app.use(
  cors()
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

app.listen(port, () => console.log(`server is running on port ${port}`));
