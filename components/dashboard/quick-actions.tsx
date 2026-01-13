"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { books } from "@/lib/mock-data"

export function QuickActions() {
  // Get a random book that's due soon for the "Next due" section
  const nextDueBook = books[10] // The Pragmatic Programmer

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Quick Actions */}
      <Card className="flex-1">
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground mb-3">Quick actions</p>
          <div className="flex gap-2">
            <Link href="/catalog">
              <Button className="flex-1">Borrow a book</Button>
            </Link>
            <Link href="/dashboard/borrow-return">
              <Button variant="outline" className="bg-transparent">
                Return a book
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Next Due */}
      <Card className="flex-1">
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground mb-2">Next due</p>
          <Link href={`/book/${nextDueBook.id}`} className="block hover:text-primary transition-colors">
            <p className="font-medium text-sm text-primary">&quot;{nextDueBook.title}&quot;</p>
            <p className="text-xs text-muted-foreground">Due in 2 days</p>
          </Link>
          <Button variant="link" className="p-0 h-auto text-xs mt-2">
            Extend
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
