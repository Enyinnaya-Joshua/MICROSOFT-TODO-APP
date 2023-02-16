import mongoose from "mongoose";

const uri = "mongodb://localhost/todo";

mongoose
  .connect(uri)
  .then(() => {
    console.log(`database is connected...!`);
  })
  .catch((error) => {
    console.log(`failed to connect to database`, error);
  });
