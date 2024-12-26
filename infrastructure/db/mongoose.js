const mongoose = require("mongoose");

exports.databaseConnection = async () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(process.env.MONGO_URI)
      .then(() => {
          console.log("DB config is done ...")
      })
};
