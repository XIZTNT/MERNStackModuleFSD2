//May need to change based on Canvas Mern Stack Tutorial (in Slack)

import { MongoClient } from "mongodb";
import mongoose from 'mongoose';

const URI = process.env.ATLAS_URI || "";
const CLIENT = new MongoClient(URI);

// Mongoose Connection
await mongoose.connect(URI, {
    dbName: "Module07"
});

// Native MongoDB Driver Connection
let DB;
try {
    await CLIENT.connect();
    DB = CLIENT.db("ModuleWk7");
    console.log("You successfully connected to MongoDB!");
} catch(e) {
    console.error("MongoDB connection error:", e);
}
export default DB;
