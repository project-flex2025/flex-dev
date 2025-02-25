import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";

// Connect to MySQL Database
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_management",
});

export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7, // 7 Days
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [credentials.email]);

          if (rows.length === 0) {
            throw new Error("User not found");
          }

          const user = rows[0];

          // 🔹 Plain-text password check (No hashing)
          if (credentials.password !== user.password) {
            throw new Error("Invalid password");
          }

          // 🔹 Generate JWT Token (Needed for Session)
          const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.NEXTAUTH_SECRET,
            { expiresIn: "7d" } // 7 days expiry
          );

          return { id: user.id, name: user.username, email: user.email, token };
        } catch (error) {
          console.error("Authorize error:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.token = user.token; // Store JWT token in session
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.token = token.token; // Attach JWT token to session
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
