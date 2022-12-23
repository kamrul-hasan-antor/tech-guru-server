const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log("listenning from port ", port);
});
