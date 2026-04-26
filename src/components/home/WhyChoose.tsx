import { ShieldCheck, Users, Sparkles, Clock, Award, Globe } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      title: "Trusted & Secure Service",
      desc: "We ensure safe, reliable and verified event management experience.",
      icon: ShieldCheck,
    },
    {
      title: "Expert Team",
      desc: "Highly skilled professionals with years of industry experience.",
      icon: Users,
    },
    {
      title: "Premium Experience",
      desc: "We deliver high-quality, modern and smooth event execution.",
      icon: Sparkles,
    },
    {
      title: "On-Time Delivery",
      desc: "We value your time and ensure everything runs on schedule.",
      icon: Clock,
    },
    {
      title: "Award Winning Service",
      desc: "Recognized for excellence and customer satisfaction.",
      icon: Award,
    },
    {
      title: "Global Standard",
      desc: "We follow international quality standards in every project.",
      icon: Globe,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-900">
          Why Choose Us
        </h2>
        <p className="text-gray-500 mt-2">
          We deliver excellence that builds trust
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                <Icon className="text-blue-600" size={22} />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}