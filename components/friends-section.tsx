import { Card, CardContent } from "@/components/ui/card"
import { friends } from "@/lib/data"

export function FriendsSection() {
  return (
    <section id="friends" className="pt-32 py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#254D70] text-center mb-8 border-b-4 border-[#954C2E] inline-block w-full pb-4">
          Friends of LC Lab
        </h2>
        <p className="text-lg text-center mb-12 text-gray-700">
          The linguistics-enthusiast crew that offered help in setting up the lab—from naming it to creating the logo
          and website.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {friends.map((friend, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <img
                  src={friend.image || "/placeholder.svg"}
                  alt={friend.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#254D70] mx-auto mb-4 shadow-md"
                />
                <h3 className="text-lg font-bold text-[#254D70] mb-2">{friend.name}</h3>
                <p className="text-base text-gray-700">{friend.contribution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
