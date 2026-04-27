/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { connectDB } from "@/src/libs/db";
import * as EventService from "@/src/app/services/event.service";

export const dynamic = "force-dynamic";

// GET ALL EVENTS
export async function GET() {
  try {
    await connectDB();

    const events = await EventService.getEvents();

    return NextResponse.json({
      success: true,
      data: events,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

// CREATE EVENT
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const event = await EventService.createEvent(body);

    return NextResponse.json({
      success: true,
      data: event,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}