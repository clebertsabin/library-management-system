"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { books, borrowedBooks } from "@/lib/mock-data"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ArrowLeft } from "lucide-react"

export default function MyBooksPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "on-time":
        return (
          <Badge variant="outline" className="text-muted-foreground">
            On time
          </Badge>
        )
      case "due-soon":
        return <Badge className="bg-warning text-warning-foreground hover:bg-warning">Due soon</Badge>
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
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 p-4 md:p-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-foreground">My Books</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Currently Borrowed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {borrowedBooks.map((borrowed) => {
                const book = books.find((b) => b.id === borrowed.bookId)
                if (!book) return null
                return (
                  <div
                    key={borrowed.id}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-16 h-20 bg-muted rounded overflow-hidden flex-shrink-0">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={`/book/${book.id}`} className="hover:text-primary transition-colors">
                        <h3 className="font-medium text-foreground">{book.title}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Borrowed {formatDate(borrowed.borrowedOn)} · Due {formatDate(borrowed.dueDate)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {getStatusBadge(borrowed.status)}
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Return
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
