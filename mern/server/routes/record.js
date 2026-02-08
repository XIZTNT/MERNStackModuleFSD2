import express from "express";

// This will help us connect to the database
// import db from "../db/connection.js"; [No longer needed]
import Record from "../db/AgentSchema.js";  // Import the Mongoose Record model

// This helps convert the id from string to ObjectId for the _id.
// import { ObjectId } from "mongodb"; [No longer needed since we're using Mongoose, which handles this internally]

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as middleware and will take control
// of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  try {
    // Use Mongoose's `find` method to fetch all records from the collection
    const records = await Record.find();  // Using the Mongoose model `Record`

    res.status(200).json(records);  // Send the records as a JSON response
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).send("Error fetching records");
  }
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  try {
    // Use Mongoose's `findById` method to fetch a single record by ID
    const record = await Record.findById(req.params.id);  // Using the Mongoose model `Record`

    if (!record) {
      return res.status(404).send("Record not found");
    }

    res.status(200).json(record);  // Send the found record as a JSON response
  } catch (err) {
    console.error("Error fetching record:", err);
    res.status(500).send("Error fetching record");
  }
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  try {
    // Use Mongoose to create a new record from the request body
    const newRecord = new Record(req.body);  // Create a new Record instance from the request body
    const savedRecord = await newRecord.save();  // Save the record to the database

    res.status(201).json(savedRecord);  // Return the saved record as a JSON response
  } catch (err) {
    console.error("Error adding record:", err);
    res.status(500).send("Error adding record");
  }
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  try {
    // Use Mongoose's `findByIdAndUpdate` method to update a record by ID
    const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true,  // Return the updated document
    });

    if (!updatedRecord) {
      return res.status(404).send("Record not found");
    }

    res.status(200).json(updatedRecord);  // Send the updated record as a JSON response
  } catch (err) {
    console.error("Error updating record:", err);
    res.status(500).send("Error updating record");
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  try {
    // Use Mongoose's `findByIdAndDelete` method to delete a record by ID
    const deletedRecord = await Record.findByIdAndDelete(req.params.id);  // Delete by ID

    if (!deletedRecord) {
      return res.status(404).send("Record not found");
    }

    res.status(200).json(deletedRecord);  // Send the deleted record as a JSON response
  } catch (err) {
    console.error("Error deleting record:", err);
    res.status(500).send("Error deleting record");
  }
});

export default router;
