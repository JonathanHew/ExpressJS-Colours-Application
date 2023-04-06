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

//Gets the list of all colours and their details
app.get("/colors", async (req, res) => {
  return res.status(200).json({
    colors,
  });
});

//Gets the details of colour with colorId of id
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
    return res.status(404).json({
      err: err.message,
    });
  }
});

//Creates a new colour with the details provided. Response contains the URI for this newly created resource
app.post("/colors", async (req, res) => {
  const id = colors.length;
  const { hexString, rgb, hsl, name } = req.body;
  try {
    if (hexString && rgb && hsl && name) {
      colors[id] = {colorId: id, hexString: hexString, rgb: rgb, hsl: hsl, name: name};
      return res.status(201).json({
        url: `localhost:5004/colors/${id}`
      });
    } else {
      throw new Error("Please do not leave any field blank!");
    }
  } catch (err) {
    return res.status(400).json({
      err: err.message,
    });
  }
});

//Modifies colour id (creates one if it doesn't already exist). Response contains the URL for this newly created resource.
app.put("/colors/:id", async (req, res) => {
    const { id } = req.params;
    const { hexString, rgb, hsl, name } = req.body;
    try {
      if (hexString && rgb && hsl && name) {
        colors[id] = {colorId: id, hexString: hexString, rgb: rgb, hsl: hsl, name: name};
        return res.status(201).json({
          url: `localhost:5004/colors/${id}`
        });
      } else {
        throw new Error("Please do not leave any field blank!");
      }
    } catch (err) {
      return res.status(400).json({
        err: err.message,
      });
    }
  });
