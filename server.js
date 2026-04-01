const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("../"));

mongoose.connect("mongodb://127.0.0.1:27017/yoban");

app.use("/api/auth", require("./routes/auth"));
app.use("/api/booking", require("./routes/booking"));
app.use("/api/photo", require("./routes/photo"));

app.listen(3000, ()=>console.log("Server running"));