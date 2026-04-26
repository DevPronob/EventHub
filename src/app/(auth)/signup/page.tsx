/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/authContext";

export default function Signup() {
  const { register, googleLogin } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await register(form.name, form.email, form.password);
      router.push("/");
    } catch (err: any) {
        console.log(err)
      setError("Failed to create account");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

       
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Create Account</h2>
          <p className="text-gray-500 text-sm mt-1">
            Start your journey with Odyssey
          </p>
        </div>

       
        {error && (
          <div className="bg-red-100 text-red-500 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="email"
            placeholder="Email Address"
            type="email"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        
        <div className="flex items-center gap-3 my-5">
          <hr className="flex-1" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="flex-1" />
        </div>

        
        <button
          onClick={googleLogin}
          className="w-full border py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Continue with Google
        </button>

       
        <p className="text-sm text-center mt-6 text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}