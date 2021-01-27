const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view", path.join(__dirname, "views"));

let apiTables = [
  {
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: "",
  },
];

let waitList = [
  {
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: "",
  },
];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "form.html"));
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/tables", function (req, res) {
  return res.json(apiTables);
});

app.get("/api/waitlist", function (req, res) {
  return res.json(waitList);
});

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
