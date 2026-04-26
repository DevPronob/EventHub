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
      try {
        const res = await fetch(`/api/event/${params.id}`);

        // ❌ API FAILED SAFELY HANDLED
        if (!res.ok) {
          setLoading(false);
          return;
        }

        const data = await res.json();
        setEvent(data?.data || null);
      } catch (err) {
        console.log("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-16 px-4 space-y-4">
        <div className="h-80 bg-gray-200 animate-pulse rounded-2xl" />
        <div className="h-6 w-1/2 bg-gray-200 animate-pulse rounded" />
        <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
      </div>
    );
  }


  if (!event) {
    return (
      <div className="text-center py-20 text-gray-500">
        Event not found 😢
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">

      
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src={event.image || "/placeholder.jpg"}
          className="w-full h-[420px] object-cover"
          alt={event.title}
        />
      </div>

    
      <div className="mt-8">

        <h1 className="text-4xl font-bold text-gray-900">
          {event.title}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
          <span>📍 {event.location}</span>
          <span>📅 {event.date}</span>
          <span>🏷️ {event.category}</span>
        </div>

      </div>

      
      <div className="mt-8 bg-gray-50 border rounded-2xl p-6 flex items-center justify-between">

        <div>
          <p className="text-gray-500 text-sm">Ticket Price</p>
          <p className="text-3xl font-bold text-orange-500">
            ${event.price}
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition">
          Book Now
        </button>

      </div>

      
      <div className="mt-10 space-y-6">

        <div>
          <h2 className="text-xl font-semibold mb-2">
            About This Event
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {event.shortDesc}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Full Details
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {event.fullDesc}
          </p>
        </div>

      </div>

     
      <div className="grid md:grid-cols-3 gap-4 mt-10">

        <div className="border rounded-xl p-4 text-center">
          <p className="text-gray-500 text-sm">Category</p>
          <p className="font-semibold">{event.category}</p>
        </div>

        <div className="border rounded-xl p-4 text-center">
          <p className="text-gray-500 text-sm">Location</p>
          <p className="font-semibold">{event.location}</p>
        </div>

        <div className="border rounded-xl p-4 text-center">
          <p className="text-gray-500 text-sm">Date</p>
          <p className="font-semibold">{event.date}</p>
        </div>

      </div>

      
      <div className="mt-12 text-center">
        <button className="bg-black text-white px-10 py-4 rounded-xl hover:bg-gray-800 transition font-medium">
          Confirm Booking →
        </button>
      </div>

    </div>
  );
}