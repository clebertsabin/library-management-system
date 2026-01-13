"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { BookCard } from "@/components/book-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { books } from "@/lib/mock-data"
import { Search } from "lucide-react"

export function CatalogContent() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get("search") || ""
  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)

  const genres = useMemo(() => {
    const uniqueGenres = [...new Set(books.map((b) => b.genre))]
    return uniqueGenres.sort()
  }, [])

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        searchQuery === "" ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.isbn.includes(searchQuery)

      const matchesGenre = selectedGenre === null || book.genre === selectedGenre

      return matchesSearch && matchesGenre
    })
  }, [searchQuery, selectedGenre])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Browse Catalog</h1>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by title, author, or ISBN..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedGenre === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedGenre(null)}
            className={selectedGenre !== null ? "bg-transparent" : ""}
          >
            All
          </Button>
          {genres.map((genre) => (
            <Button
              key={genre}
              variant={selectedGenre === genre ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedGenre(genre)}
              className={selectedGenre !== genre ? "bg-transparent" : ""}
            >
              {genre}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filteredBooks.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No books found matching your search.</p>
          <Button
            variant="link"
            onClick={() => {
              setSearchQuery("")
              setSelectedGenre(null)
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  )
}
