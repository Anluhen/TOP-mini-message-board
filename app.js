// app setup
const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");

// Routers
const indexRouter = require("./routes/indexRouter");

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Specify view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));

// Router
app.use("/", indexRouter);