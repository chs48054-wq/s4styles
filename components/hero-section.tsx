import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              New Collection Launched
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Little Trends for <span className="text-primary">Little Stars</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Premium quality, soft cotton fabrics that are gentle on your child's skin. Perfect for every season and
              occasion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full border-2 bg-transparent">
                View Collection
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=700&width=600"
                alt="Happy child wearing stylish outfit"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
