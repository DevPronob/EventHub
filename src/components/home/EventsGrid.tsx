import Link from "next/link";
import { events } from "../../data/items";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function EventsGrid() {
  return (
    <section className="py-24 bg-gray-50">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          Latest Events
        </h2>
        <p className="text-gray-500 mt-2">
          Discover upcoming events and opportunities
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">

        {events.map((event: any) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
          >
            {/* Image */}
            <div className="relative h-44 bg-gradient-to-r from-pink-100 to-purple-100">
              
              {/* Date badge (optional if you have date) */}
              {event.date && (
                <span className="absolute top-3 left-3 bg-white text-xs font-medium px-3 py-1 rounded-full shadow">
                  {event.date}
                </span>
              )}

            </div>

            {/* Content */}
            <div className="p-5">

              <h3 className="text-lg font-semibold text-gray-900">
                {event.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {event.description}
              </p>

              {/* CTA */}
              <div className="mt-5">
                <Link href={`/events/${event.id}`}>
                  <span className="inline-flex items-center text-pink-500 font-medium hover:text-pink-600 transition">
                    View Details
                    <span className="ml-1">→</span>
                  </span>
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}