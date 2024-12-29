import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const dogs = [
  { id: "'1'", name: "'Bella'", description: "'Recovering after a car accident'", imageUrl: "'/placeholder.svg?height=300&width=300'" },
  { id: "'2'", name: "'Max'", description: "'Rescued from an abusive home'", imageUrl: "'/placeholder.svg?height=300&width=300'" },
  { id: "'3'", name: "'Charlie'", description: "'Found abandoned in a park'", imageUrl: "'/placeholder.svg?height=300&width=300'" },
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

