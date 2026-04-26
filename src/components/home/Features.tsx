import {
  CalendarCheck,
  Search,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Easy Booking",
      desc: "Book events instantly with a smooth and simple process.",
      icon: CalendarCheck,
    },
    {
      title: "Smart Search",
      desc: "Find events faster with intelligent filtering system.",
      icon: Search,
    },
    {
      title: "Best Price",
      desc: "Get competitive pricing for all events and services.",
      icon: DollarSign,
    },
    {
      title: "Secure System",
      desc: "Fully protected and secure booking experience.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Powerful Features
        </h2>
        <p className="text-gray-500 mt-2">
          Everything you need for a modern event experience
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-pink-50 mb-4">
                <Icon className="text-pink-500" size={22} />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2">
                {feature.desc}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}