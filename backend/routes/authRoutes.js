import express from "express";
import User from "../User.js"; // adjust path if needed
const router = express.Router();
// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.json({ message: "User Registered" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "User not found" });
    if (user.password !== password)
      return res.json({ message: "Wrong password" });
    res.json({ token: "dummy-token", user });
  } catch (err) {
    res.status(500).json(err);
  }
});
export default router;
Frontend codes:
