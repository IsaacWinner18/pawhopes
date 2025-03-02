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
    5: {
      id: 5,
      name: "Lola",
      story:
        "Lola was found in a ditch, half-buried under garbage, her frail body barely moving. She had been abandoned and left to die, her ribs poking through her skin, her eyes sunken from starvation. When rescuers approached, she didn't growl or run—she simply looked up, as if asking if this time, someone would care. At the vet, they discovered she had been eating dirt just to survive. Her legs were so weak she couldn't stand. Despite everything, when the rescuers gently lifted her, she gave the tiniest wag of her tail—hope still flickered inside her. Lola is fighting to survive, but without donations, dogs like her don't stand a chance. She needs food, medicine, and time to heal. Your donation could mean the difference between life and death for Lola. Will you help?",
      imageUrl: "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1740950782/volunteer_tvsfxh.png",
      targetDonation: 2500,
      currentDonation: 180,
    },
    6: {
      id: 6,
      name: "Bailey",
      story:
        "Bailey had once been someone's beloved puppy. She had played fetch in the yard, curled up on the couch, and been showered with love. But as she grew older, she wasn’t as small, as playful, or as exciting. One day, her family loaded her into the car, and she thought they were going on another adventure. Instead, they left her on the side of a busy road and drove away without looking back. Bailey ran after the car until her legs gave out, her paws bleeding on the pavement. She waited in that same spot for days, believing they would come back. When rescuers finally found her, she was starving and exhausted, but her eyes still searched every passing car—hoping to see the faces she once loved. Your donation could mean the difference between life and death for Bailey. Will you help? ",
      imageUrl: "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1740950782/dog-volunteering-opportunities-10-ways-to-help-dogs-in-your-community-715595_xcayal.jpg",
      targetDonation: 200,
      currentDonation: 10,
    },
    7: {
      id: 7,
      name: "Daisy",
      story:
        "Daisy had been born in a puppy mill, where cages were stacked on top of each other, and the air smelled of sickness and neglect. She had never touched grass, never felt the sun on her back. Her only purpose was to have litter after litter of puppies, all taken from her too soon. When she grew too weak to produce more, she was discarded like trash—dumped in a field and left to fend for herself. Confused and terrified, Daisy wandered for days, too afraid to approach humans. When rescuers finally caught her, she flinched at every touch, expecting pain. But for the first time in her life, a hand reached out not to hurt her, but to guide her toward a future where she was no longer just a breeding machine—she was finally free. please donate to help Daisy and other dogs like her.",
      imageUrl: "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1740950780/fireworks_gdqcdp.png",
      targetDonation: 500,
      currentDonation: 100,
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

