/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddEventPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const [form, setForm] = useState<any>({
    title: "",
    category: "",
    location: "",
    date: "",
    price: "",
    shortDesc: "",
    fullDesc: "",
    image: "",
  });

  // ✅ FIXED IMGBB UPLOAD
  const uploadImage = async (file: File) => {
    const formData = new FormData();

    formData.append("image", file);
    formData.append("key", "3865938eefff3a14cd02acc91c1d32e1");

    const res = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log("IMGBB RESPONSE:", data);

    if (!data.success) {
      throw new Error("Image upload failed");
    }

    return data.data.url;
  };

  // ✅ IMAGE HANDLER
  const handleImage = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // preview locally
    setImagePreview(URL.createObjectURL(file));

    try {
      const url = await uploadImage(file);

      console.log("UPLOAD URL:", url);

      setForm((prev: any) => ({
        ...prev,
        image: url,
      }));
    } catch (err) {
      console.error("Image upload error:", err);
    }
  };

  // ✅ SUBMIT HANDLER
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("EVENT CREATED:", data);

      router.push("/events");
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create Event</h1>
        <p className="text-gray-500 mt-1">
          Fill all required details to publish your event
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-2xl shadow-sm p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT */}
          <div className="space-y-4">
            <input
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Event Title"
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />

            <input
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Category"
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            />

            <input
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Location"
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
            />

            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2"
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <input
              type="number"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Price"
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
            />

            <textarea
              className="w-full border rounded-lg px-4 py-2"
              rows={3}
              placeholder="Short Description"
              onChange={(e) =>
                setForm({ ...form, shortDesc: e.target.value })
              }
            />

            <textarea
              className="w-full border rounded-lg px-4 py-2"
              rows={4}
              placeholder="Full Description"
              onChange={(e) =>
                setForm({ ...form, fullDesc: e.target.value })
              }
            />
          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-6">
          <input
            type="file"
            className="w-full border rounded-lg px-4 py-2"
            onChange={handleImage}
          />

          {imagePreview && (
            <img
              src={imagePreview}
              className="h-48 w-full object-cover rounded-xl mt-4"
            />
          )}
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl"
        >
          {loading ? "Creating Event..." : "Create Event"}
        </button>
      </form>
    </div>
  );
}