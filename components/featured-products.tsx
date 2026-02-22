import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Summer Cotton Dress",
    price: 1299,
    originalPrice: 1799,
    image: "/placeholder.svg?height=400&width=350",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Boys Casual Set",
    price: 1499,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=350",
    rating: 4.9,
    reviews: 98,
    badge: "New",
  },
  {
    id: 3,
    name: "Party Wear Frock",
    price: 1899,
    originalPrice: 2499,
    image: "/placeholder.svg?height=400&width=350",
    rating: 5.0,
    reviews: 156,
    badge: "Premium",
  },
  {
    id: 4,
    name: "Denim Jacket Combo",
    price: 1699,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=350",
    rating: 4.7,
    reviews: 87,
    badge: "Trending",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-fredoka)" }}>
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites loved by parents and kids alike
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-2 hover:border-primary transition-all hover:shadow-lg"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden bg-muted">
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                      {product.badge}
                    </div>
                  )}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} - Premium quality children's clothing`}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    Soft Cotton • Skin-friendly • {product.id % 2 === 0 ? "Summer" : "All Season"} Perfect
                  </p>

                  {/* Add to Cart Button */}
                  <Button className="w-full rounded-full bg-primary hover:bg-primary/90">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-6 text-base rounded-full border-2 bg-transparent">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
