import db from "@/utils/db";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Check if user exists
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      return Response.json({ error: "User not found" }, { status: 401 });
    }

    const user = rows[0];

    // 🔹 Plain-text password check (No hashing)
    if (password !== user.password) {
      return Response.json({ error: "Invalid password" }, { status: 401 });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user.id, email: user.email }, "your_secret_key", { expiresIn: "1h" });

    return Response.json({ message: "Login successful", token }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
