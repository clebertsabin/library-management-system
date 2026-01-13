"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/catalog?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Hero Content */}
          <div>
            <p className="text-sm text-muted-foreground mb-4">Welcome to Your Library</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Discover, borrow, and manage your books in one place.
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Search thousands of titles, track what you&apos;ve borrowed, and explore personalized recommendations —
              all from your modern digital library.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Search by title, author, or ISBN</span>
              <form onSubmit={handleSearch}>
                <Button type="submit">Search catalog</Button>
              </form>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-foreground">24k+</p>
                <p className="text-xs text-muted-foreground">Books available</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1.2k</p>
                <p className="text-xs text-muted-foreground">Active members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-xs text-muted-foreground">On-time returns</p>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="flex flex-col gap-4">
            {/* Today at a glance */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Today at a glance</h3>
                <div className="flex gap-8 mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground">Borrowed</p>
                    <p className="text-2xl font-bold text-foreground">36</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Available</p>
                    <p className="text-2xl font-bold text-foreground">1,204</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-3">Recently borrowed</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary">&quot;The Silent Patient&quot;</span>
                      <span className="text-xs text-muted-foreground">Due in 5 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary">&quot;Atomic Habits&quot;</span>
                      <span className="text-xs text-muted-foreground">Due tomorrow</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Search Card */}
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-3">Search catalog</p>
                <form onSubmit={handleSearch} className="flex gap-2">
                  <Input
                    placeholder="Title, author, or subject"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="sm">
                    Go
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-muted-foreground">Featured today</p>
                    <Badge className="bg-success text-success-foreground hover:bg-success">Available</Badge>
                  </div>
                  <Link href="/book/8" className="flex gap-3 hover:bg-muted/50 p-2 -mx-2 rounded-lg transition-colors">
                    <div className="w-12 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                      <img
                        src="/the-infinite-shelf-book-cover.jpg"
                        alt="The Infinite Shelf"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">The Infinite Shelf</h4>
                      <p className="text-xs text-muted-foreground">Sarah Nunez</p>
                      <p className="text-xs text-muted-foreground mt-1">A gentle guide to building reading habits.</p>
                    </div>
                  </Link>
                </div>

                <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                  <Link href="/catalog">
                    <Button variant="outline" size="sm">
                      Browse catalog
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="ghost" size="sm">
                      About the library
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
                  <span>© 2025</span>
                  <div className="flex gap-3">
                    <Link href="/help" className="hover:text-foreground">
                      Help
                    </Link>
                    <Link href="/terms" className="hover:text-foreground">
                      Terms
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
