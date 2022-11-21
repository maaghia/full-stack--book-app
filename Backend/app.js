require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const booksRoutes = require("./routes/books");
const userRoutes = require("./routes/User");

// Crearting the express app
const app = express();

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path);
  next();
});

//defining routes
app.use("/api/books", booksRoutes);
app.use("/api/", userRoutes);


//connecting to a DB
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("connected to MongoDB!");
  }).catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
    console.log(`Listening for request on port ${process.env.PORT}`);
});