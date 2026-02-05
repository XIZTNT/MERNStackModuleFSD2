import express from "express";
import cors from "cors";
import connectDB from "./db/connection.js";

//Routes Imports
import records from "./routes/record.js";
import login from "./routes/login.js";

const PORT = process.env.PORT || 5050;
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Connect to MongoDB
connectDB()

//Routes initialized here
app.use("/record", records);

app.use("/login", login);

//start the Express server

app.listen(PORT, () => {

    console.log(`Server is listening on port ${PORT}`)
});