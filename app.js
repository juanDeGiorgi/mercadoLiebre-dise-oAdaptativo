const { rejects } = require("assert");
const express = require("express");
const { resolve } = require("path");
const app = express();
const path = require("path");


//MIDELWARES
app.use(express.static("public"));


//ROUTING
app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "./views/home.html")));

//START SERVER
app.listen(3000, () => console.log("server on port 3000"));
