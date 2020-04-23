const fs = require("fs");
const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(PORT));

