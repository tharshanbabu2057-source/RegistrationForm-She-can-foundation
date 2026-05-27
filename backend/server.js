const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "adi2006@",
  database: "shecan"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed");
  } else {
    console.log("Database Connected");
  }
});

app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  const sql =
    "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      res.send("Error");
    } else {
      res.send("Form Submitted Successfully");
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});