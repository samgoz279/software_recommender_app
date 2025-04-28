import { NextResponse } from "next/server";
import { callLlamaModel } from "@/lib/ai"; // we'll define this properly next

export async function POST(req: Request) {
  try {
    const { requirements } = await req.json();

    const parsedRequirements = await callLlamaModel(requirements);

    return NextResponse.json({ results: parsedRequirements });
  } catch (error) {
    console.error("Error processing requirements:", error);
    return NextResponse.json({ error: "Failed to process requirements" }, { status: 500 });
  }
}