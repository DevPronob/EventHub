/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { connectDB } from "@/src/libs/db";
import * as EventService from "../../../app/services/event.service";

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

export async function POST(req: Request) {
  try {
    await connectDB();

    let body;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON body" },
        { status: 400 }
      );
    }

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