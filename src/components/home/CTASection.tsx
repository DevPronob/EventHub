import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-5xl mx-auto text-center px-6">

        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-xs bg-orange-100 text-orange-600 rounded-full font-medium">
          🚀 Trusted by 10,000+ Users
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Start Managing Your Events with Ease
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          A simple, fast and modern platform to create, discover and manage events effortlessly.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition shadow"
          >
            Get Started Free
          </Link>

          <Link
            href="/events"
            className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition"
          >
            Explore Events
          </Link>

        </div>

      </div>

    </section>
  );
}