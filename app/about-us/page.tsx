export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Summit Luxury Treks</h1>
          <p className="text-lg text-muted-foreground">
            Learn more about our mission and commitment to exceptional trekking
            experiences.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Summit Luxury Treks was founded with a simple mission: to provide
            authentic, well-organized trekking experiences in the Himalayas.
            With over 15 years of experience, we have guided thousands of
            trekkers through some of the most beautiful mountain ranges in the
            world.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our team of experienced guides and coordinators are passionate about
            sharing the beauty of the mountains while maintaining the highest
            standards of safety, quality, and respect for the local communities
            we partner with.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            From the iconic Everest Base Camp trek to lesser-known trails, we
            craft journeys that combine expert logistics, local knowledge, and
            genuine connection to the mountain environment.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 px-4 border-t border-border bg-secondary/50">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Experience & Expertise
              </h3>
              <p className="text-base">
                With 15+ years in the trekking industry, our guides are
                certified experts who know the mountains, the trails, and how to
                ensure your safety and satisfaction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Local Partnerships</h3>
              <p className="text-base">
                We work closely with local Sherpa guides and communities. Your
                trek directly supports livelihoods and helps preserve the
                mountain culture and environment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-base">
                We maintain rigorous safety standards, from acclimatization
                protocols to equipment quality. Your well-being is our top
                priority on every trek.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Thoughtfully Curated Routes
              </h3>
              <p className="text-base">
                Every trek is carefully planned with attention to pacing,
                altitude, logistics, and authentic experiences. We handle all
                the details so you can focus on the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certified & Trusted Section */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Certified & Trusted</h2>
          <p className="text-base text-muted-foreground mb-8">
            Summit Luxury Treks is a government-registered company operating
            with the highest standards in the trekking industry.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 border border-border rounded-lg bg-background">
              <span className="text-accent font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold">Government Registered</p>
                <p className="text-sm text-muted-foreground">
                  Officially registered with Nepal's Ministry of Culture,
                  Tourism & Civil Aviation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border border-border rounded-lg bg-background">
              <span className="text-accent font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold">TAAN Member</p>
                <p className="text-sm text-muted-foreground">
                  Proud member of the Trekking Agents Association of Nepal
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border border-border rounded-lg bg-background">
              <span className="text-accent font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold">NMA Certified</p>
                <p className="text-sm text-muted-foreground">
                  Certified by the Nepal Mountaineering Association for safety
                  and quality standards
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border border-border rounded-lg bg-background">
              <span className="text-accent font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold">Nepal Tourism Board Approved</p>
                <p className="text-sm text-muted-foreground">
                  Recognized and approved by Nepal's official tourism authority
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto  space-y-4">
          <h2 className="text-2xl font-bold">Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Ready to book your trek? Contact us for more information.
          </p>
          <div className="space-y-2">
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:mail@govindatravels.com"
                className="hover:underline"
              >
                mail@govindatravels.com
              </a>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a href="tel:+977984132894" className="hover:underline">
                +977 9841328947
              </a>
            </p>
            <p className="text-sm">Location: Kathmandu, Nepal</p>
          </div>
        </div>
      </section>
    </main>
  );
}
