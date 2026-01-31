import express from "express";
import cors from "cors";
import records from "./routes/record.js";


const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());

app.use(express.json());

//Routes initialized here
app.use("/record", records);

//start the Express server

app.listen(PORT, () => {

    console.log(`Server is listening on port ${PORT}`)
});