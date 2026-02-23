"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

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
    <section className="text-center flex flex-col items-center justify-center h-[70vh]">
      <h2 className="font-bold  text-xl uppercase mb-6 leading-tight text-balance">
        Luxury Adventures in Nepal, Tibet & Bhutan
      </h2>
      <p className="text-muted-foreground mb-4 leading-loose max-w-3xl tracking-wider">
        Welcome to Summit Luxury Treks, where elevated adventure meets
        thoughtful craftsmanship in the Himalayas. With over 15 years of
        experience, we design luxury treks, private tours, and fully tailor-made
        journeys across Nepal, Tibet, and Bhutan. From the iconic trails of
        Everest, to the quiet monastic valleys of Bhutan, and the spiritual
        landscapes of Tibet, every journey is curated with precision, comfort,
        and care. As a government-registered company and a proud member of TAAN,
        NMA, and the Nepal Tourism Board, we operate with uncompromising
        standards of safety, service, and authenticity. Summit Luxury Treks
        isn’t about doing more trips — it’s about doing the right ones,
        exceptionally well.
      </p>
      <p className="text-muted-foreground mb-4 leading-loose max-w-3xl tracking-wider">
        Whether you seek the legendary trails of Everest, the serene monasteries
        of Bhutan, or the spiritual wonders of Tibet, we craft each journey to
        perfection. As a government-registered company and proud TAAN, NMA, and
        Nepal Tourism Board member, we uphold the highest safety, service, and
        exclusivity standards.
      </p>
      <Link href="/tours">
        <Button>Get in touch</Button>
      </Link>
    </section>
  );
}
