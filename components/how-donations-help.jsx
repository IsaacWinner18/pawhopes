import Image from "next/image"

const successStories = [
  { 
    id: 1, 
    name: "Rocky", 
    beforeImage: "/transformation.jpg", 
    story: "Rocky was found malnourished and injured. After weeks of care love, he\'s now healthy happy in his forever home."
  },
]

export default function HowDonationsHelp() {
  return (
    (<section id="how-donations-help" className="py-16 bg-white">
      <div className="container mx-auto px-3">
        <h2 className="text-3xl font-bold text-center mb-8">How Your Donations Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
           
            <ul className="list-inside space-y-4 py-12 px-2 border-2 md:border-0 border-red-100 border-solid">
              <li className="flex">
                <Image src="/corgi.png" alt="corgi" width={30} height={10} />
                Veterinary care for injured and sick dogs
                </li>
              <li className="flex"> <Image src="/corgi.png" alt="corgi" width={30} height={10} /> Nutritious food and shelter</li>
              <li className="flex"> <Image src="/corgi.png" alt="corgi" width={30} height={10} /> Training and socialization</li>
              <li className="flex"> <Image src="/corgi.png" alt="corgi" width={30} height={10} /> Rescue operations to save dogs in danger</li>
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
                    width={280}
                    height={280}
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

