import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const dogs = [
  { id: "1", name: "Bella", description: "'Recovering after a car accident'", imageUrl: "/bella-dog.jpg" },
  { id: "2", name: "Max", description: "'Rescued from an abusive home'", imageUrl: "/Adopt-Shelter-Dog-Large.jpg" },
  { id: "3", name: "Charlie", description: "'Found abandoned in a park'", imageUrl: "/rescue-four.jpg" },
  { id: "4", name: "Abel", description: "'Found abandoned in a park'", imageUrl: "/rescue-three.jpg" },
  { id: "5", name: "Lola", description: "'Lola was found in a ditch,'", imageUrl: "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1740950782/volunteer_tvsfxh.png" },
  { id: "6", name: "Bailey", description: "'Bailey had once been someone's'", imageUrl: "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1740950782/dog-volunteering-opportunities-10-ways-to-help-dogs-in-your-community-715595_xcayal.jpg" },
  { id: "7", name: "Daisy", description: "'Daisy had been born in a'", imageUrl: "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1740950780/fireworks_gdqcdp.png" },
]

export default function GallerySection() {
  return (
    (<section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Dogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogs.map((dog) => (
            <div key={dog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={dog.imageUrl}
                alt={dog.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dog.name}</h3>
                <p className="text-gray-600 mb-4">{dog.description}</p>
                <Link href={`/dogs/${dog.id}`}>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

