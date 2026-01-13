import Link from "next/link"
import { books } from "@/lib/mock-data"
import { BookCard } from "@/components/book-card"

export function FeaturedBooks() {
  const featuredBooks = books.slice(1, 4) // Get first 3 books for featured section

  return (
    <section className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-foreground">Featured books</h2>
          <Link href="/catalog" className="text-sm text-primary hover:text-primary/80 transition-colors">
            View full catalog
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  )
}
