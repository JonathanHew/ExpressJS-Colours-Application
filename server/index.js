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
  return res.status(200).json({
    colors,
  });
});
//gets the details of colour with colorId of id
app.get("/colors/:id", (req, res) => {
  try {
    const { id } = req.params;
    const color = colors.find((c) => c.colorId == id);
    if (color == undefined) {
      throw new Error("Color does not exist!");
    }
    return res.status(200).json({
      color,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({
        err: err.message
    })
  }
});

app.post("/colors", async (req, res) => {
  const id = colors.length;
});
