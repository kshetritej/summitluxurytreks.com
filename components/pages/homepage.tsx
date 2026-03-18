// export const dynamic = "force-static";

import Hero from "@/components/hero";
import WelcomeSection from "../sections/welcome-section";
import WhyUsSection from "../sections/why-us";
import FeaturedSections from "../sections/featured-sections";

export default async function Homepage() {
  return (
    <div>
      <Hero />
      <WhyUsSection />
      <WelcomeSection />
      <FeaturedSections />
    </div>
  );
}
