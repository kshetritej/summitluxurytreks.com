"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WelcomeSection() {
  const features = [
    {
      title: "Unmatched Expertise",
      description: "With over 15 years of experience in Himalayan trekking",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    },
    {
      title: "Seamless & Luxury Comfort",
      description:
        "Premium lodges and personalized service throughout your journey",
      image:
        "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&h=400&fit=crop",
    },
    {
      title: "99% Trek Success Rate",
      description: "Proven track record of safe and successful expeditions",
      image:
        "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=600&h=400&fit=crop",
    },
    {
      title: "Local Expertise, Global Trust",
      description: "TAAN, NMA, and Nepal Tourism Board certified partners",
      image:
        "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
            Welcome to Nepal
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            Luxury Adventures in Nepal, Tibet & Bhutan
          </h1>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed max-w-3xl">
            Welcome to Summit Luxury Treks, where elevated adventure meets thoughtful
            craftsmanship in the Himalayas. With over 15 years of experience, we
            design luxury treks, private tours, and fully tailor-made journeys
            across Nepal, Tibet, and Bhutan. From the iconic trails of Everest,
            to the quiet monastic valleys of Bhutan, and the spiritual
            landscapes of Tibet, every journey is curated with precision,
            comfort, and care. As a government-registered company and a proud
            member of TAAN, NMA, and the Nepal Tourism Board, we operate with
            uncompromising standards of safety, service, and authenticity.
            Summit Luxury Treks isn’t about doing more trips — it’s about doing the
            right ones, exceptionally well.
          </p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed max-w-3xl">
            Whether you seek the legendary trails of Everest, the serene
            monasteries of Bhutan, or the spiritual wonders of Tibet, we craft
            each journey to perfection. As a government-registered company and
            proud TAAN, NMA, and Nepal Tourism Board member, we uphold the
            highest safety, service, and exclusivity standards.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Left Side - Promo Card */}
          <div className="lg:col-span-1">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              {/* Background Image */}
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop"
                alt="Luxury Trek Promotion"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <p className="text-sm font-semibold opacity-90">Featured</p>
                </div>

                <div>
                  <p className="text-4xl font-bold mb-2">Special</p>
                  <p className="text-sm opacity-90 mb-6">
                    Limited time luxury packages with exclusive discounts
                  </p>
                  <Link
                    href="/tours"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Explore More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition">
                      {feature.title}
                    </h3>
                    <p className="text-xs opacity-90 line-clamp-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Explore All Treks
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
