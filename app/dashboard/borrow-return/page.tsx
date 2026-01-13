"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ArrowLeft, Search } from "lucide-react"
import { useState } from "react"

export default function BorrowReturnPage() {
  const [searchQuery, setSearchQuery] = useState("")

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
          <h1 className="text-xl font-semibold text-foreground">Borrow / Return</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Borrow a Book */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Borrow a Book</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Search for a book to borrow from the catalog.</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by title, author, or ISBN"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Link href="/catalog">
                  <Button>Browse Catalog</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Return a Book */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Return a Book</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Select a book from your borrowed list to return.</p>
              <Link href="/dashboard/my-books">
                <Button variant="outline" className="w-full bg-transparent">
                  View My Borrowed Books
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
