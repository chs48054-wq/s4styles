import { Package, Truck, RefreshCw, Shield } from "lucide-react"

const badges = [
  {
    icon: Package,
    title: "Premium Quality Fabric",
    description: "Soft cotton that's gentle on skin",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick shipping across Pakistan",
  },
  {
    icon: RefreshCw,
    title: "Easy Exchange",
    description: "7-day hassle-free returns",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Safe & secure payments",
  },
]

export function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
