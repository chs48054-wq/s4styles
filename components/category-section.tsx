import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const categories = [
  {
    id: "boys",
    title: "Boys Collection",
    description: "Stylish & comfortable outfits",
    image: "/placeholder.svg?height=500&width=400",
    bgColor: "from-blue-100/80 to-cyan-100/80",
  },
  {
    id: "girls",
    title: "Girls Collection",
    description: "Pretty dresses & adorable sets",
    image: "/placeholder.svg?height=500&width=400",
    bgColor: "from-pink-100/80 to-rose-100/80",
  },
  {
    id: "new",
    title: "New Arrivals",
    description: "Latest fashion for your little ones",
    image: "/placeholder.svg?height=500&width=400",
    bgColor: "from-amber-100/80 to-yellow-100/80",
  },
]

export function CategorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-fredoka)" }}>
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect outfit for your little star in just a few clicks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`#${category.id}`}>
              <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <div className={`relative h-80 bg-gradient-to-br ${category.bgColor} overflow-hidden`}>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={`${category.title} - ${category.description}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                    <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-fredoka)" }}>
                      {category.title}
                    </h3>
                    <p className="text-sm mb-3 opacity-90">{category.description}</p>
                    <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                      Shop Now
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
