// app setup
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Routers
const indexRouter = require("./routes/indexRouter");

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Specify view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));

// Router
app.use("/", indexRouter);