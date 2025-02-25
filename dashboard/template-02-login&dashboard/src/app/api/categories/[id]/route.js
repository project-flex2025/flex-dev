import pool from "../../../../utils/db";
import { NextResponse } from "next/server";

// GET: Fetch a single category
export async function GET(req, { params }) {
    try {
        const { id } = params;
        const [rows] = await pool.query("SELECT * FROM categories WHERE id = ?", [id]);

        if (rows.length === 0) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        return NextResponse.json(rows[0], { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// PUT: Update a category
export async function PUT(req, { params }) {
    try {
        const { id } = params;
        const { name, description } = await req.json();

        if (!name) {
            return NextResponse.json({ error: "Category name is required" }, { status: 400 });
        }

        const [result] = await pool.query("UPDATE categories SET name = ?, description = ? WHERE id = ?", [name, description, id]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Category updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// DELETE: Remove a category
export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        const [result] = await pool.query("DELETE FROM categories WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Category deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
