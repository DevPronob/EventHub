/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ManagePage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/event");
        const data = await res.json();

        setEvents(Array.isArray(data?.data) ? data.data : []);
      } catch (err) {
        toast.error("Failed to load events ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

 
  const handleDelete = async (id: string) => {
    const ok = confirm("Are you sure?");
    if (!ok) return;

    try {
      setDeletingId(id);

      const res = await fetch(`/api/event/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.message || "Delete failed ❌");
        return;
      }

      setEvents((prev) => prev.filter((e) => e._id !== id));

      toast.success("Event deleted successfully 🗑️");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong ❌");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">

      
      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-3xl font-bold">Manage Events</h1>
          <p className="text-gray-500 text-sm">
            Control your events
          </p>
        </div>

        <Link
          href="/event/add"
          className="bg-orange-500 text-white px-5 py-2 rounded-lg"
        >
          + Add Event
        </Link>

      </div>

      
      {loading && (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-24 bg-gray-100 animate-pulse rounded-xl"
            />
          ))}
        </div>
      )}

      
      {!loading && events.length === 0 && (
        <p className="text-center text-gray-500 py-20">
          No events found
        </p>
      )}

      
      <div className="grid md:grid-cols-2 gap-5">

        {events.map((e) => (
          <div
            key={e._id}
            className="border rounded-xl p-4 flex gap-4"
          >

            
            {e.image ? (
              <img
                src={e.image}
                className="w-20 h-20 object-cover rounded-lg"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-200 rounded-lg" />
            )}

            
            <div className="flex-1">

              <h2 className="font-semibold">
                {e.title}
              </h2>

              <p className="text-sm text-gray-500">
                {e.category} • {e.location}
              </p>

              <p className="text-orange-500 font-bold">
                ${e.price}
              </p>

            </div>

            
            <div className="flex flex-col gap-2">

              <Link
                href={`/events/${e._id}`}
                className="text-blue-500"
              >
                View
              </Link>

              <button
                onClick={() => handleDelete(e._id)}
                disabled={deletingId === e._id}
                className="text-red-500 disabled:opacity-50"
              >
                {deletingId === e._id
                  ? "Deleting..."
                  : "Delete"}
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}