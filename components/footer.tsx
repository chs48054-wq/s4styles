import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-bold" style={{ fontFamily: "var(--font-fredoka)" }}>
              <span className="text-primary">S</span>
              <span> for </span>
              <span className="text-accent">Style</span>
            </div>
            <p className="text-sm text-background/80">
              Premium children's clothing for your little stars. Quality you can trust.
            </p>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full bg-transparent border-background/20 hover:bg-background/10 text-background"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full bg-transparent border-background/20 hover:bg-background/10 text-background"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                  Boys Collection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                  Girls Collection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                  Returns & Exchange
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-background/80 mb-4">Subscribe for latest updates and exclusive offers</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span>info@sforstyle.pk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>© 2025 S for Style. All rights reserved. Made with love for little stars ⭐</p>
        </div>
      </div>
    </footer>
  )
}
