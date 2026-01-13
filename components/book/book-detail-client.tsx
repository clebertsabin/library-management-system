"use client"

import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import type { Book, Review } from "@/lib/mock-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bookmark, Star, ArrowLeft } from "lucide-react"
import { useState } from "react"

interface BookDetailClientProps {
  book: Book
  reviews: Review[]
  recommendedBooks: Book[]
}

export function BookDetailClient({ book, reviews, recommendedBooks }: BookDetailClientProps) {
  const { user } = useAuth()
  const [isSaved, setIsSaved] = useState(false)

  const isAvailable = book.copiesInLibrary > book.currentlyBorrowed
  const availableCopies = book.copiesInLibrary - book.currentlyBorrowed

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 ${star <= rating ? "fill-warning text-warning" : "text-muted-foreground"}`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/catalog"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Catalog</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm text-foreground">Book detail</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Book Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Book Cover */}
                <div className="flex-shrink-0">
                  <div className="w-48 aspect-[3/4] relative bg-muted rounded-lg overflow-hidden mx-auto md:mx-0">
                    <Image src={book.cover || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                  </div>
                  {/* Mobile Actions */}
                  <div className="mt-4 flex flex-col gap-2 md:hidden">
                    <Button className="w-full" disabled={!isAvailable}>
                      {isAvailable ? "Borrow this book" : "Not available"}
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsSaved(!isSaved)}>
                      <Bookmark className={`w-4 h-4 mr-2 ${isSaved ? "fill-current" : ""}`} />
                      {isSaved ? "Saved" : "Add to reading list"}
                    </Button>
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-foreground">{book.title}</h1>
                  <p className="text-muted-foreground mt-1">by {book.author}</p>

                  <div className="flex items-center gap-3 mt-4">
                    <Badge className={isAvailable ? "bg-success text-success-foreground hover:bg-success" : ""}>
                      {isAvailable ? "Available" : "On loan"}
                    </Badge>
                    <Badge variant="outline">{book.genre}</Badge>
                    <span className="text-sm text-muted-foreground">{book.year}</span>
                    <span className="text-sm text-muted-foreground">· {book.pages} pages</span>
                  </div>

                  {/* Desktop Actions */}
                  <div className="hidden md:flex gap-3 mt-6">
                    <Button disabled={!isAvailable}>{isAvailable ? "Borrow this book" : "Not available"}</Button>
                    <Button variant="outline" className="bg-transparent" onClick={() => setIsSaved(!isSaved)}>
                      <Bookmark className={`w-4 h-4 mr-2 ${isSaved ? "fill-current" : ""}`} />
                      {isSaved ? "Saved" : "Add to reading list"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="font-semibold text-foreground mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{book.description}</p>
              </div>

              {/* Reviews */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-foreground">Reviews</h2>
                  <Button variant="ghost" size="sm">
                    Write a review
                  </Button>
                </div>

                {reviews.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-sm text-foreground">{review.userName}</span>
                            {renderStars(review.rating)}
                          </div>
                          <p className="text-sm text-muted-foreground">{review.content}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No reviews yet. Be the first to review this book!</p>
                )}
              </div>
            </div>

            {/* Right Column - Availability & Recommendations */}
            <div className="space-y-6">
              {/* Availability */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Copies in library</span>
                      <span className="text-foreground">{book.copiesInLibrary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Currently borrowed</span>
                      <span className="text-foreground">{book.currentlyBorrowed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Next available</span>
                      <Badge className={isAvailable ? "bg-success text-success-foreground hover:bg-success" : ""}>
                        {isAvailable ? "Now" : "In 3 days"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Books */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Recommended</CardTitle>
                    <span className="text-xs text-muted-foreground">Based on this title</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-2">
                    {recommendedBooks.map((recBook) => (
                      <Link key={recBook.id} href={`/book/${recBook.id}`} className="group">
                        <div className="aspect-[3/4] relative bg-muted rounded overflow-hidden">
                          <Image
                            src={recBook.cover || "/placeholder.svg"}
                            alt={recBook.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <p className="text-xs text-foreground mt-1 line-clamp-1">{recBook.title}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{recBook.author}</p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Borrowing Policy */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Borrowing policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Loan period: 14 days · 1 renewal · Late fee applies after 3 days overdue.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
