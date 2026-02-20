import { Mountain, Users, Heart, Zap } from 'lucide-react';

export default function WhyUsSection() {
  const features = [
    {
      icon: Mountain,
      title: 'Expert Himalayan Guides',
      description:
        'All treks are led by certified Sherpa guides with 15+ years of mountain experience, unlocking authentic cultural experiences and hidden trails most travelers never discover.',
    },
    {
      icon: Users,
      title: 'Outdoor Specialists',
      description:
        'Choose from 50+ meticulously curated Nepal trekking routes designed by mountain experts. From beginner-friendly to challenging expeditions, whatever your mood and fitness level.',
    },
    {
      icon: Heart,
      title: 'Small Groups, Big Connections',
      description:
        '75% of our trekkers join as solo travelers, and 95% rate their experience 5 stars. Our intimate groups of 8-12 create lasting friendships and authentic memories.',
    },
    {
      icon: Zap,
      title: 'Hassle-Free from Start',
      description:
        'We handle permits, logistics, accommodations, and meals so you can focus on the adventure. From booking to summit, your journey is seamlessly managed.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Trek with Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience Nepal&apos;s Himalayas with trusted expertise and authentic hospitality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-6 p-4 bg-primary/10 rounded-full">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wider">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}