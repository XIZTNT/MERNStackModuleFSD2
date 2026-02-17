import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res
    .clearCookie("accessToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .status(200)
    .json({ message: "Logged out successfully" });
});

export default router;
