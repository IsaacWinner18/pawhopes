import Image from "next/image"

const successStories = [
  { 
    id: 1, 
    name: "Rocky", 
    beforeImage: "/placeholder.svg?height=300&width=300", 
    afterImage: "/placeholder.svg?height=300&width=300",
    story: "Rocky was found malnourished and injured. After weeks of care love, he\'s now healthy happy in his forever home."
  },
]

export default function HowDonationsHelp() {
  return (
    (<section id="how-donations-help" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">How Your Donations Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Your Support Provides:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Veterinary care for injured and sick dogs</li>
              <li>Nutritious food and shelter</li>
              <li>Training and socialization</li>
              <li>Rescue operations to save dogs in danger</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Success Stories</h3>
            {successStories.map((story) => (
              <div key={story.id} className="mb-6">
                <h4 className="text-xl font-semibold mb-2">{story.name}&apos;s Transformation</h4>
                <div className="flex space-x-4 mb-2">
                  <Image
                    src={story.beforeImage}
                    alt={`${story.name} before`}
                    width={150}
                    height={150}
                    className="rounded" />
                  <Image
                    src={story.afterImage}
                    alt={`${story.name} after`}
                    width={150}
                    height={150}
                    className="rounded" />
                </div>
                <p className="text-gray-600">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>)
  );
}

