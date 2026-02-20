export const dynamic = "force-static";

import CTACard from "@/components/cards/cta-card";
import Hero from "@/components/hero";
import RecentBlogs from "../sections/recent-blogs";
import LatestTrips from "../sections/latest-trips";
import WelcomeSection from "../sections/welcome-section";
import WhyUsSection from "../sections/why-us";

export default async function Homepage() {
  return (
    <div>
      <Hero />
      <WhyUsSection />
      <WelcomeSection />
      <LatestTrips />
      <div className="container mx-auto p-2">
        <RecentBlogs />
        <CTACard />
      </div>
    </div>
  );
}
