const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/form", (req, res) => {
  const { name, phone, email, uniqueID } = req.body;

  const newReservation = {
    customerName: name,
    phoneNumber: phone,
    customerEmail: email,
    customerID: uniqueID,
  };

  for (var i = 0; i >= apiTables.length; i++) {
    if (apiTables.length > 5) {
      waitList.push(newReservation);
    } else {
      apiTables.push(newReservation);
    }
  }
  res.json(newReservation);
});

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

app.get("/view", (req, res) => res.sendFile(path.join(__dirname, "view.html")));
app.get("/form", (req, res) => res.sendFile(path.join(__dirname, "form.html")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/api/tables", (req, res) => res.json(apiTables));

app.get("/api/waitlist", (req, res) => res.json(waitList));

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
