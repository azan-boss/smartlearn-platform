import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: 'Hello, world!' });
}

export async function POST() {
    // Implementation here
}