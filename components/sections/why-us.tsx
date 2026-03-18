import { Heart, Diamond, Banknote, RectangleGoggles } from "lucide-react";

export default function WhyUsSection() {
  const features = [
    {
      icon: Diamond,
      title: "Only the Finest",
      description:
        "At Summit Luxury, you only find the best. We do the hard work so you don’t have to.",
    },

    {
      icon: Banknote,
      title: "Greed is Good",
      description:
        "With quality, you also get lowest prices, last-minute availability and 24x7 support.",
    },
    {
      icon: Heart,
      title: "Experience every flavour",
      description:
        "Offbeat or mainstream, a tour or a show, a game or a museum - we have ‘em all.",
    },
    {
      icon: RectangleGoggles,
      title: "No pain, only gain",
      description:
        "Didn’t love it? We’ll give you your money back. Not cocky, just confident.",
    },
  ];

  return (
    <section className="bg-primary/20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 container mx-auto ">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex flex-col p-8">
              <IconComponent className="w-10 h-10 text-primary" />
              <div className="font-bold text-foreground mb-3 uppercase leading-relaxed h-8 mt-4 tracking-wider">
                {feature.title}
              </div>

              <div className="text-muted-foreground text-sm leading-relaxed tracking-wider">
                {feature.description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
