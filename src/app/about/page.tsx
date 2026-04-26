import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">

      
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          About EventHub
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          A modern event management platform to discover, create, and manage
          events effortlessly.
        </p>
      </section>

    
      <section className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1515169067868-5387ec356754"
            className="w-full h-[350px] object-cover"
            alt="Event"
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          What is EventHub?
        </h2>

        <p className="text-gray-600 mt-4 leading-relaxed">
          EventHub is a full-stack event management platform built with Next.js
          and modern web technologies. It allows users to explore upcoming
          events, view detailed information, and manage their own events through
          a clean and intuitive interface.
        </p>
      </section>

    
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

      
          <div className="bg-white p-6 rounded-2xl border hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">
              Discover Events
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Browse events with search and filtering by category, price, and location.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">
              Create Events
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Easily create and publish events with image upload and full details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">
              Manage Dashboard
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              View, update, and delete your events in a clean dashboard UI.
            </p>
          </div>

        </div>
      </section>

      
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-2xl font-semibold text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Our mission is to simplify event discovery and management for users
            and organizers. We aim to provide a seamless and engaging experience
            using modern web technologies and user-centered design.
          </p>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold">
          Ready to explore events?
        </h2>

        <p className="text-gray-500 mt-2">
          Discover amazing events happening around you.
        </p>

        <Link
          href="/events"
          className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
        >
          Browse Events
        </Link>
      </section>

    </div>
  );
}