/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function EventsGrid() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/event");
        const data = await res.json();

        //
        const limited = Array.isArray(data?.data)
          ? data.data.slice(0, 6)
          : [];

        setEvents(limited);
      } catch (err) {
        console.log("Fetch error:", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="py-24 bg-gray-50">

    
      <div className="text-center mb-14 px-4">
        <h2 className="text-4xl font-bold text-gray-900">
          Latest Events
        </h2>

        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Discover upcoming events, workshops, and opportunities
        </p>
      </div>

  
      {loading && (
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 animate-pulse rounded-2xl"
            />
          ))}
        </div>
      )}

  
      {!loading && (
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">

          {events.map((event) => (
            <div
              key={event._id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-100"
            >

              
              <div className="relative h-48 bg-gray-100 overflow-hidden">

                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Image
                  </div>
                )}

                {/* CATEGORY BADGE */}
                <span className="absolute top-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full">
                  {event.category}
                </span>

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-lg font-semibold group-hover:text-orange-500 transition">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {event.shortDesc}
                </p>

                {/* FOOTER */}
                <div className="flex justify-between items-center mt-5">

                  <span className="text-orange-500 font-bold">
                    ${event.price}
                  </span>

                  <Link href={`/events/${event._id}`}>
                    <button className="text-sm text-orange-500 hover:underline">
                      View →
                    </button>
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}
    </section>
  );
}