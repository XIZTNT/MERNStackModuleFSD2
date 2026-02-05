import express from "express";
import User from "../db/UserSchema.js";

const router = express.Router();

// POST /login
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  // Debugging: log the incoming request
  console.log("Login attempt:", email, password);

  try {
    const user = await User.findOne({ email });

    // Debugging: log what MongoDB returned
    console.log("User found in DB:", user);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: user not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Unauthorized: wrong password" });
    }

    // Login successful
    return res.status(200).json({
      message: "Login successful",
      user: { email: user.email, first_name: user.first_name, last_name: user.last_name },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
