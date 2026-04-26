import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 ">

   
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6 py-16">

       
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            EventHub
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Professional event management platform for modern users.
            Discover, manage and enjoy events easily.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-4 text-lg">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">📘</span>
            <span className="hover:text-white cursor-pointer">🐦</span>
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/items" className="hover:text-white transition">Events</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/login" className="hover:text-white transition">Login</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Wedding Events</li>
            <li className="hover:text-white transition">Corporate Events</li>
            <li className="hover:text-white transition">Birthday Parties</li>
            <li className="hover:text-white transition">Conferences</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
          <p className="text-sm">📧 info@odyssey.com</p>
          <p className="text-sm">📞 +880 1234-567890</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Odyssey. All rights reserved.
      </div>

    </footer>
  );
}