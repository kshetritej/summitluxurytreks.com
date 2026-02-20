import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-primary to-primary/5 text-primary-foreground overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center ">
          <p className="text-lg md:text-xl mb-4 opacity-90 uppercase tracking-widest font-semibold">
            Nepal&apos;s Premier Trekking Destination
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Trek Through the Himalayas
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-95 text-balance leading-relaxed">
            Discover authentic Nepal with experienced local guides. From
            beginner-friendly trails to challenging summits, find your perfect
            Himalayan adventure with breathtaking views and warm hospitality.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="#"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Explore Nepal Treks
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
