import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/image-5.jpg')",
      }}
    >
   
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
        
        <div className="max-w-4xl mx-auto px-6 text-center text-white">

          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Explore Unforgettable{" "}
            <span className="text-pink-400">Events & Experiences</span>
          </h1>

          
          <p className="mt-5 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Discover world-class events, connect with people, and create
            memories that last forever. Your journey starts here.
          </p>

          
          <div className="mt-8 flex items-center justify-center gap-4">
            
            <button className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-full font-medium shadow-lg">
              <Link href="/events">Explore Events</Link>
            </button>

            <button className="border border-white/40 hover:bg-white hover:text-black transition px-6 py-3 rounded-full font-medium">
              <Link href="/about">Learn More</Link>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}