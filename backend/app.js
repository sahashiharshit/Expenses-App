const express = require("express");
const app= express();
const cors = require('cors');
const db = require("./utils/database");
const signupRoutes = require('./routes/signupRoute');
const loginRoutes = require('./routes/loginRoute');
app.use(express.json());
app.use(cors());
app.use("/expense",signupRoutes);
app.use("/expense",loginRoutes);


db.sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));



