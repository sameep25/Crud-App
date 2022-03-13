import express from "express";
import mongoose from "mongoose";
import route from "./Routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const PORT = 8000;
const URL = `mongodb+srv://${username}:${password}@crud.evo3a.mongodb.net/CRUD?retryWrites=true&w=majority` ;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", route);

mongoose
  .connect(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  });
