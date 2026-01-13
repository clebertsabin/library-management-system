"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { books, borrowedBooks } from "@/lib/mock-data"

export function BorrowedBooksTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "on-time":
        return (
          <Badge variant="outline" className="text-muted-foreground">
            On time
          </Badge>
        )
      case "due-soon":
        return <Badge className="bg-warning text-warning-foreground hover:bg-warning">Due today</Badge>
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>
      default:
        return null
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Borrowed books</CardTitle>
        <Link href="/dashboard/my-books" className="text-sm text-primary hover:text-primary/80">
          View all
        </Link>
      </CardHeader>
      <CardContent>
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-muted-foreground border-b border-border">
                <th className="text-left py-2 font-medium">Title</th>
                <th className="text-left py-2 font-medium">Borrowed on</th>
                <th className="text-left py-2 font-medium">Due date</th>
                <th className="text-left py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map((borrowed) => {
                const book = books.find((b) => b.id === borrowed.bookId)
                if (!book) return null
                return (
                  <tr key={borrowed.id} className="border-b border-border last:border-0">
                    <td className="py-3">
                      <Link href={`/book/${book.id}`} className="hover:text-primary transition-colors">
                        <p className="font-medium text-sm text-foreground">{book.title}</p>
                        <p className="text-xs text-muted-foreground">{book.author}</p>
                      </Link>
                    </td>
                    <td className="py-3 text-sm text-muted-foreground">{formatDate(borrowed.borrowedOn)}</td>
                    <td className="py-3 text-sm text-muted-foreground">{formatDate(borrowed.dueDate)}</td>
                    <td className="py-3">{getStatusBadge(borrowed.status)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile List */}
        <div className="md:hidden space-y-4">
          {borrowedBooks.map((borrowed) => {
            const book = books.find((b) => b.id === borrowed.bookId)
            if (!book) return null
            return (
              <Link
                key={borrowed.id}
                href={`/book/${book.id}`}
                className="block p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-sm text-foreground">{book.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Borrowed {formatDate(borrowed.borrowedOn)} · Return by {formatDate(borrowed.dueDate)}
                    </p>
                  </div>
                  {getStatusBadge(borrowed.status)}
                </div>
              </Link>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
