"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Plus, Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardSidebar } from "./sidebar"

export function DashboardHeader() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")

  const greeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  return (
    <header className="border-b border-border bg-background">
      <div className="flex items-center justify-between p-4">
        {/* Mobile Logo & Menu */}
        <div className="flex items-center gap-3 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <DashboardSidebar />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
          </Link>
        </div>

        {/* Greeting */}
        <div className="hidden md:block">
          <h1 className="text-xl font-semibold text-foreground">
            {greeting()}, {user?.name?.split(" ")[0] || "Reader"}
          </h1>
          <p className="text-sm text-muted-foreground">Track your borrowed books and discover new titles.</p>
        </div>

        {/* Search & Add Book */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 bg-muted rounded-lg px-3 py-1">
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              Search by title, author, genre, or ISBN
            </span>
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-32 h-8 text-sm"
            />
            <Button size="sm" variant="secondary">
              Search
            </Button>
          </div>
          {user?.role === "admin" && (
            <Link href="/dashboard/add-book">
              <Button size="sm">
                <Plus className="w-4 h-4 mr-1" />
                Add book
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Greeting */}
      <div className="md:hidden px-4 pb-4">
        <p className="text-xs text-muted-foreground">Welcome back</p>
        <h1 className="text-lg font-semibold text-foreground">{user?.name?.split(" ")[0] || "Reader"}</h1>
      </div>
    </header>
  )
}
