import Link from "next/link"
import { ShoppingCart, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold" style={{ fontFamily: "var(--font-fredoka)" }}>
              <span className="text-primary">S</span>
              <span className="text-foreground"> for </span>
              <span className="text-accent">Style</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#new" className="text-sm font-medium hover:text-primary transition-colors">
              New Arrivals
            </Link>
            <Link href="#boys" className="text-sm font-medium hover:text-primary transition-colors">
              Boys
            </Link>
            <Link href="#girls" className="text-sm font-medium hover:text-primary transition-colors">
              Girls
            </Link>
            <Link href="#sale" className="text-sm font-medium hover:text-accent transition-colors">
              Sale
            </Link>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-bold flex items-center justify-center text-accent-foreground">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
