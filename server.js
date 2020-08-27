const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

// Bodyparaser middleware
app.use(cors());
app.use(express.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/items", items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
