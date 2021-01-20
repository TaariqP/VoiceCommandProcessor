const express = require("express");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || "3000";

// Configure routes
app.use(express.json());
app.use("/", routes);
