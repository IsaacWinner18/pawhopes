import Image from "'next/image'"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// This would typically come from a database or API
const getDog = (id) => ({
  id,
  name: "'Bella'",
  story: "'Bella was found injured on the side of road after a car accident. Despite her traumatic experience, she has shown incredible resilience and loving personality. With proper care attention, Bella is way to full recovery looking for forever home that can provide with love deserves.'",
  imageUrl: "'/placeholder.svg?height=400&width=600'",
  targetDonation: 5000,
  currentDonation: 3750,
})

export default function DogProfile({
  params
}) {
  const dog = getDog(params.id)
  const donationPercentage = (dog.currentDonation / dog.targetDonation) * 100

  return (
    (<div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={dog.imageUrl}
            alt={dog.name}
            width={600}
            height={400}
            className="rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{dog.name}</h1>
          <p className="text-gray-600 mb-6">{dog.story}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Donation Progress</h2>
            <Progress value={donationPercentage} className="mb-2" />
            <p className="text-sm text-gray-600">
              ${dog.currentDonation.toLocaleString()} raised of ${dog.targetDonation.toLocaleString()} goal
            </p>
          </div>
          <Button size="lg" className="w-full md:w-auto">Donate for {dog.name}</Button>
        </div>
      </div>
    </div>)
  );
}

