/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EventDetailsPage() {
  const params = useParams<{ id: string }>();

  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return;

    const load = async () => {
      const res = await fetch(`/api/event/${params.id}`);
      const data = await res.json();

      setEvent(data?.data || null);
      setLoading(false);
    };

    load();
  }, [params?.id]);

  if (loading) return <p className="p-10">Loading...</p>;
  if (!event) return <p className="p-10">Event not found</p>;

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <img
        src={event.image}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">{event.title}</h1>

      <p className="text-gray-500 mt-2">
        📍 {event.location} • 📅 {event.date}
      </p>

      <p className="mt-4">{event.fullDesc}</p>

      <p className="mt-6 text-orange-500 font-bold text-xl">
        ${event.price}
      </p>
    </div>
  );
}