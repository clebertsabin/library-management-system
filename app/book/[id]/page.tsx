import { notFound } from "next/navigation"
import { books, reviews as allReviews } from "@/lib/mock-data"
import { BookDetailClient } from "@/components/book/book-detail-client"

export function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }))
}

export default async function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const book = books.find((b) => b.id === id)

  if (!book) {
    notFound()
  }

  const bookReviews = allReviews.filter((r) => r.bookId === id)
  const recommendedBooks = books.filter((b) => b.id !== id).slice(0, 4)

  return <BookDetailClient book={book} reviews={bookReviews} recommendedBooks={recommendedBooks} />
}
