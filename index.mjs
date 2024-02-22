import express from "express";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  // check for file data.json, if found return the data, if not fetch from other api
  if (fs.existsSync("data.json")) {
    const data = fs.readFileSync("data.json");
    res.send(data);
  } else {
    res.send("Data not found");
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});