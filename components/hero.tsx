import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section
      className={`relative h-screen bg-linear-to-b from-primary/70 to-primary/20
        flex flex-col justify-center  items-center p-12 text-center uppercase
        gap-8 -mt-16`}
    >
      <div
        className="absolute inset-0 op"
        style={{
          zIndex: -1,
          backgroundImage: "url(/hero-image.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <h1 className="font-bold text-4xl  text-white z-999 leading-12">
        your gateway <br />
        to the world
      </h1>
      <p className="mb-10 opacity-95 text-balance leading-relaxed text-white">
        Award-winning luxury travel experts crafting bespoke journeys for
        discerning travellers since 2005
      </p>
      <div id="btn-group" className="flex gap-4">
        <Button variant={"secondary"} className="uppercase">
          Explore Our Trips
        </Button>
        <Button className="uppercase">Plan my trip</Button>
      </div>
    </section>
  );
}
