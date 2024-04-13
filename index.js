import express from "express";
import dbConnection from "./db.js";
import "dotenv/config";
import router from "./routes/Route.js";
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors())

app.use('/',router)

const startApp = () => {
  dbConnection(process.env.CONNECTION_STRING).then(() => {
    app.listen(5000, console.log("Server is listen at port: 5000"));
  });
};

startApp();
