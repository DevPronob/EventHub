"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/authContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        
        <Link href="/" className="text-xl font-bold text-orange-500">
          EventHub
        </Link>

        
        <div className="flex items-center gap-6">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              {item.name}
            </Link>
          ))}

         
          {!user ? (
            <div className="flex items-center gap-3 ml-4">

              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-orange-500"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition"
              >
                Register
              </Link>

            </div>
          ) : (
            <div className="flex items-center gap-3 ml-4">

              <Link
                href="/events/add"
                className="text-sm text-gray-600 hover:text-orange-500"
              >
                Add Event
              </Link>

              <Link
                href="/events/manage"
                className="text-sm text-gray-600 hover:text-orange-500"
              >
                Manage
              </Link>

              <button
                onClick={logout}
                className="text-sm bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>

            </div>
          )}

        </div>
      </div>
    </nav>
  );
}