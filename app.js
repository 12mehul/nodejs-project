const express = require("express");
const { dbStart } = require("./db/db");
const userRoutes = require("./routing/user");

const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use("/api/user", userRoutes);

const startConection = async () => {
  try {
    await dbStart("mongodb://localhost:27017/nodejstest");
    await app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startConection();
