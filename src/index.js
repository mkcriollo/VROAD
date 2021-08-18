const express = require("express");
const app = express();
const userRoutes = require("./routers/user");

// will parse incoming req with json payload (1st place)
app.use(express.json());
// lets you use the userRoutes from a dif file
app.use(userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on Port 3000");
});
