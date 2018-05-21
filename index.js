const express = require("express");
const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const data = require("./data/cohorts.json");

function findById(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  }
  return null;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined"));
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
  res.json({data});
});

app.get("/:id", (req, res) => {
  let record = findById(data, req.params.id);
  if (!record) {
    res.status(404).json({
      error: {
        message: "No record found!"
      }
    });
  } else {
    res.json({ data: record });
  }
});

app.listen(PORT);
