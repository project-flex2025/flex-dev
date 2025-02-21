import db from "@/utils/db";

export async function POST(req) {
    try {
        const { username, email, password } = await req.json();

        // Insert plain-text password (⚠️ Not Secure)
        await db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password]);

        return Response.json({ message: "User registered successfully" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}
