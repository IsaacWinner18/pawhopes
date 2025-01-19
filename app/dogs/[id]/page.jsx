import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link";

// This would typically come from a database or API
const getDog = (id) => {
  const dogProfiles = {
    1: {
      id: 1,
      name: "Bella",
      story:
        " Recovering after a car accident, Bella was found injured on the side of the road after the accident. Despite her traumatic experience, she has shown incredible resilience and a loving personality. With proper care and attention, Bella is on her way to a full recovery and looking for a forever home that can provide her with the love she deserves.",
      imageUrl: "/bella-dog.jpg",
      targetDonation: 5000,
      currentDonation: 40,
    },
    2: {
      id: 2,
      name: "Max",
      story:
        "Rescued from an abusive home, Max is an energetic Labrador Retriever who loves to play fetch and go on adventures. He was rescued from a neglectful situation and is now thriving in our rescue house care, waiting for a loving family.",
      imageUrl: "/Adopt-Shelter-Dog-Large.jpg",
      targetDonation: 3000,
      currentDonation: 23,
    },
    3: {
      id: 3,
      name: "Charlie",
      story:
        "Found abandoned in a park, Charlie is a sweet and shy Husky mix who needs patience and love to come out of her shell. She was abandoned at a shelter but has shown amazing progress in her foster home.",
      imageUrl: "/rescue-four.jpg",
      targetDonation: 4000,
      currentDonation: 1000,
    },
    4: {
      id: 4,
      name: "Abel",
      story:
        "Charlie is a cheerful Beagle with a heart of gold. He loves meeting new people and is always ready for a cuddle. Rescued from the streets, Charlie is ready for a fresh start in a forever home.",
      imageUrl: "/rescue-three.jpg",
      targetDonation: 2500,
      currentDonation: 180,
    },
  };

  return dogProfiles[id] || null; // Return the matching profile or null if not found
};

export default function DogProfile({
  params
}) {
  const dog = getDog(Number(params.id.replace(/['"]/g, "")))
  // console.log("this is the id", params.id)
  const donationPercentage = (dog.currentDonation / dog.targetDonation) * 100

  return (
    <div className="container mx-auto px-6 py-8">
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
          <a href="https://t.me/RyanPawHopeOrganization">
          <Button size="lg" className="w-full md:w-auto">Donate for {dog.name}</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

