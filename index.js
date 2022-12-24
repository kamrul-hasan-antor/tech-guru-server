const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

const categories = require("./data/categories.json");

const courses = require("./data/courses.json");
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const selectedCategory = courses.find((course) => course.category_id === id);
  res.send(selectedCategory);
});

app.listen(port, () => {
  console.log("listenning from port ", port);
});
