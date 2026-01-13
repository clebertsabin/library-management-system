import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturedBooks } from "@/components/landing/featured-books"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedBooks />
      </main>
      <Footer />
    </div>
  )
}
