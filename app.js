const express = require("express");
const products = require("./products");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello hello");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(8000, () => {
  console.log("This is running");
});
