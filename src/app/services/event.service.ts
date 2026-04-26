/* eslint-disable @typescript-eslint/no-explicit-any */
import Event from "../models/Event";

export const createEvent = async (data: any) => {
  return await Event.create(data);
};

export const getEvents = async () => {
  return await Event.find().sort({ createdAt: -1 });
};

export const getEventById = async (id: string) => {
  return await Event.findById(id);
};

export const deleteEvent = async (id: string) => {
  return await Event.findByIdAndDelete(id);
};