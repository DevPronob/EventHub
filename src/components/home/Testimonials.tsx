/* eslint-disable react/no-unescaped-entities */
export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Event Manager",
      text: "Amazing platform! Booking events has never been this easy and smooth.",
    },
    {
      name: "David Lee",
      role: "Marketing Lead",
      text: "Professional UI and seamless experience. Highly recommended!",
    },
    {
      name: "Ayesha Rahman",
      role: "Entrepreneur",
      text: "Secure, fast, and beautifully designed system for events.",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-900">
          What People Say
        </h2>
        <p className="text-gray-500 mt-2">
          Real feedback from our users
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">

        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <p className="text-gray-600 text-sm">"{r.text}&quot;</p>

            <div className="mt-5">
              <h4 className="font-semibold text-gray-900">{r.name}</h4>
              <p className="text-xs text-gray-500">{r.role}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}