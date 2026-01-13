import Link from "next/link"
import Image from "next/image"
import type { Book } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  const isAvailable = book.copiesInLibrary > book.currentlyBorrowed

  return (
    <Link href={`/book/${book.id}`} className="group">
      <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-[3/4] relative bg-muted">
          <Image
            src={book.cover || "/placeholder.svg"}
            alt={book.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-foreground text-sm line-clamp-1 group-hover:text-primary transition-colors">
            {book.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{book.author}</p>
          <div className="flex items-center gap-2 mt-3">
            <Badge
              variant={isAvailable ? "default" : "secondary"}
              className={isAvailable ? "bg-success text-success-foreground hover:bg-success" : ""}
            >
              {isAvailable ? "Available" : "On loan"}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {book.genre}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  )
}
