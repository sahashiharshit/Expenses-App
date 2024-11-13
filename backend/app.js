const express = require("express");
const app= express();
const cors = require('cors');
const db = require("./utils/database");
const signupRoutes = require('./routes/signupRoute');
app.use(express.json());
app.use(cors());
app.use("/expense",signupRoutes);


db.sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));



