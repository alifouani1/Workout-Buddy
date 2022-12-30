require("dotenv").config();

const express = require("express");

//express app
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, res.method);
  next();
});

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

//connect to mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen to port - process.env.PORT || 4000
    app.listen(process.env.PORT, () => {
      console.log('Connected to server & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  });
