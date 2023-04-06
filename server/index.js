//import colors JSON as object
const colors = require("./data/data.json");

// express and cors setup
const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

// assign port 5004 for this server
app.listen(5004, () => {
  console.log("server has started on port 5004!");
});

//routes

//gets the list of all colours and their details
app.get("/colors", async (req, res) => {
  res.json({
    colors
  });
});
//gets the details of colour with colorId of id
app.get("/colors/:id", (req, res) => {
  const id = req.params.id;
  const color = colors.find((c) => (c.colorId == id));
  res.json({
    color
  });
});
