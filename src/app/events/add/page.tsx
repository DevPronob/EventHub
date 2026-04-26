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

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      "https://api.imgbb.com/1/upload?key=3865938eefff3a14cd02acc91c1d32e1",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    console.log(data)
    return data.data.url;
  };

const handleImage = async (e: any) => {
  const file = e.target.files[0];
  if (!file) return;

  setImagePreview(URL.createObjectURL(file));

  const url = await uploadImage(file);

  console.log("IMAGE URL:", url);

  setForm((prev: any) => ({
    ...prev,
    image: url,
  }));
  console.log(file)
};

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    router.push("/events");
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">

      
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Create Event
        </h1>

        <p className="text-gray-500 mt-1">
          Fill all required details to publish your event
        </p>
      </div>

     
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-2xl shadow-sm p-6"
      >

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          
          <div className="space-y-4">

            
            <div>
              <label className="text-sm font-medium">
                Event Title
              </label>
              <input
                className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter event title"
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />
            </div>

            
            <div>
              <label className="text-sm font-medium">
                Category
              </label>
              <input
                className="w-full border rounded-lg px-4 py-2 mt-1"
                placeholder="Tech / Music / Business"
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
              />
            </div>

           
            <div>
              <label className="text-sm font-medium">
                Location
              </label>
              <input
                className="w-full border rounded-lg px-4 py-2 mt-1"
                placeholder="Dhaka, Bangladesh"
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
              />
            </div>

           
            <div>
              <label className="text-sm font-medium">
                Date
              </label>
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2 mt-1"
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
              />
            </div>

          </div>

          
          <div className="space-y-4">

            
            <div>
              <label className="text-sm font-medium">
                Price ($)
              </label>
              <input
                type="number"
                className="w-full border rounded-lg px-4 py-2 mt-1"
                placeholder="0"
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />
            </div>

           
            <div>
              <label className="text-sm font-medium">
                Short Description
              </label>
              <textarea
                className="w-full border rounded-lg px-4 py-2 mt-1"
                rows={3}
                placeholder="Short summary..."
                onChange={(e) =>
                  setForm({ ...form, shortDesc: e.target.value })
                }
              />
            </div>

            
            <div>
              <label className="text-sm font-medium">
                Full Description
              </label>
              <textarea
                className="w-full border rounded-lg px-4 py-2 mt-1"
                rows={4}
                placeholder="Full event details..."
                onChange={(e) =>
                  setForm({ ...form, fullDesc: e.target.value })
                }
              />
            </div>

          </div>

        </div>

       
        <div className="mt-6">

          <label className="text-sm font-medium">
            Upload Image
          </label>

          <input
            type="file"
            className="w-full border rounded-lg px-4 py-2 mt-1"
            onChange={handleImage}
          />

         
          {imagePreview && (
            <img
              src={imagePreview}
              className="h-48 w-full object-cover rounded-xl mt-4"
            />
          )}

        </div>

        
        <button
          disabled={loading}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition"
        >
          {loading ? "Creating Event..." : "Create Event"}
        </button>

      </form>

    </div>
  );
}