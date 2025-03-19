import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public/events.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const events = JSON.parse(jsonData);

  return NextResponse.json(events);
}