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

  // ✅ DELETE FIXED
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
      toast.success("Deleted successfully 🗑️");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong ❌");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Manage Events</h1>

      {loading && <p>Loading...</p>}

      <div className="grid md:grid-cols-2 gap-5">
        {events.map((e) => (
          <div key={e._id} className="border p-4 rounded-xl flex gap-4">

            {/* IMAGE */}
            <img
              src={e.image}
              className="w-20 h-20 object-cover rounded-lg"
            />

            {/* INFO */}
            <div className="flex-1">
              <h2 className="font-semibold">{e.title}</h2>
              <p className="text-sm text-gray-500">
                {e.location}
              </p>
              <p className="text-orange-500 font-bold">
                ${e.price}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col gap-2">

              {/* ✅ FIXED DETAILS LINK */}
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
                {deletingId === e._id ? "Deleting..." : "Delete"}
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}