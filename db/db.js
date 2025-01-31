const mongoose = require("mongoose");

const dbStart = (url) => {
  mongoose
    .set("strictQuery", false)
    .connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
};

module.exports = { dbStart };
