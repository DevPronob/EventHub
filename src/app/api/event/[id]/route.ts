/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/src/libs/db";
import * as EventService from "../../../services/event.service";


// ✅ GET by ID
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params; // ✅ MUST await

    const event = await EventService.getEventById(id);

    return NextResponse.json({
      success: true,
      data: event,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  }
}


export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    console.log("DELETE /api/event/[id]");

    await connectDB();

    const { id } = await context.params;

    await EventService.deleteEvent(id);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Deleted successfully",
      }),
      { status: 200 }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      { status: 400 }
    );
  }
}