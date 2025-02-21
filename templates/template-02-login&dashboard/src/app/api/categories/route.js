import pool from "../../../utils/db";
import { NextResponse } from "next/server";

// GET: Fetch all categories
export async function GET() {
    try {
        const [rows] = await pool.query("SELECT * FROM categories");
        return NextResponse.json(rows, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// POST: Create a new category
export async function POST(req) {
    try {
        const { name, description } = await req.json();
        if (!name) {
            return NextResponse.json({ error: "Category name is required" }, { status: 400 });
        }

        const [result] = await pool.query("INSERT INTO categories (name, description) VALUES (?, ?)", [name, description]);
        return NextResponse.json({ message: "Category created", id: result.insertId }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
