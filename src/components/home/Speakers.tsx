export default function SpeakersSection() {
  const speakers = [
    {
      name: "Pranab Roy",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Iftekar Hossain",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Sadia Afrin",
      role: "Chief Financial Officer",
      image:
        "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Meet Our Leadership Team
        </h2>
        <p className="text-gray-500 mt-2">
          Experienced professionals guiding our vision
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="text-center bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="w-28 h-28 mx-auto mb-4">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover rounded-full border"
              />
            </div>

            <h4 className="text-lg font-semibold text-gray-900">
              {speaker.name}
            </h4>

            <p className="text-sm text-gray-500">{speaker.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}