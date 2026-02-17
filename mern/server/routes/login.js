import express from "express";
import jwt from "jsonwebtoken";
import User from "../db/UserSchema.js";


const router = express.Router();

// POST /login
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt:", email, password);

  try {
    // 1️⃣ Find user
    const user = await User.findOne({ email });
    console.log("User found in DB:", user);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: user not found" });
    }

    // 2️⃣ Compare passwords
    // If you’re storing plain text (not recommended):
    if (user.password !== password) {
      return res.status(401).json({ message: "Unauthorized: wrong password" });
    }

    // If using hashed passwords (recommended):
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) return res.status(401).json({ message: "Unauthorized: wrong password" });

    // 3️⃣ Create JWT tokens
    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    // 4️⃣ Send tokens as httpOnly cookies
    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false, // true in production
        sameSite: "lax", 
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      })
      .status(200)
      .json({
        message: "Login successful",
        user: { email: user.email, first_name: user.first_name, last_name: user.last_name },
      });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
