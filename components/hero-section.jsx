import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    (<section
      className="relative h-[600px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-center bg-no-repeat z-0"
        style={{backgroundImage: "url('/hero-bgg.gif')"}}></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Give Them Hope, One Paw at a Time</h1>
        <p className="text-xl mb-8">Help us rescue and care for dogs in need</p>
        <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
          Donate Now
        </Button>
      </div>
    </section>)
  );
}

