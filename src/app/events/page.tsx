/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);

  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/event")
      .then((res) => res.json())
      .then((data) => setEvents(data.data || []));
  }, []);


  const filtered = events.filter((e) => {
    return (
      e.title?.toLowerCase().includes(search.toLowerCase()) &&
      (category ? e.category === category : true) &&
      (location ? e.location === location : true) &&
      (e.price ? e.price <= maxPrice : true)
    );
  });

 
  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setLocation("");
    setMaxPrice(1000);
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">

      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Discover Events
        </h1>
        <p className="text-gray-500 mt-2">
          Find and explore amazing events
        </p>
      </div>

      
      <div className="bg-white border rounded-2xl p-5 mb-10 space-y-4 shadow-sm">

       
        <input
          className="w-full border rounded-xl px-4 py-3"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        
        <div className="grid md:grid-cols-3 gap-4">

         
          <select
            className="border rounded-xl px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Wedding">Wedding</option>
            <option value="Business">Business</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
          </select>

          
          <select
            className="border rounded-xl px-3 py-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Khulna">Khulna</option>
            <option value="Rajshahi">Rajshahi</option>
          </select>

         
          <input
            type="number"
            className="border rounded-xl px-3 py-2"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />

        </div>

       
        <button
          onClick={clearFilters}
          className="text-sm text-orange-500 hover:underline"
        >
          Clear Filters
        </button>

      </div>

     
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {filtered.length === 0 ? (
          <p className="text-center col-span-3 text-gray-500">
            No events found 😢
          </p>
        ) : (
          filtered.map((event) => (
            <div
              key={event._id}
              className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {event.image ? (
                <img
                  src={event.image}
                  className="h-44 w-full object-cover"
                  alt={event.title}
                />
              ) : (
                <div className="h-44 w-full bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}

              <div className="p-5">

                <h2 className="text-lg font-semibold">
                  {event.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {event.shortDesc}
                </p>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-orange-500 font-semibold">
                    ${event.price}
                  </span>

                  <Link href={`/events/${event._id}`}>
                    <button className="text-sm text-orange-500 hover:underline">
                      View →
                    </button>
                  </Link>

                </div>

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}