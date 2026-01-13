"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { books } from "@/lib/mock-data"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, AlertCircle, CheckCircle } from "lucide-react"
import { useEffect } from "react"

const genres = ["Fiction", "Non-fiction", "Thriller", "Self-Help", "Technology", "Children", "Biography", "History"]

export default function AddBookPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
    pages: "",
    year: "",
    isbn: "",
    copiesInLibrary: "1",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "admin")) {
      router.push("/dashboard")
    }
  }, [user, isLoading, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)
    setIsSubmitting(true)

    // Validation
    if (!formData.title || !formData.author || !formData.genre) {
      setError("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Add book to mock data (in a real app, this would be a database operation)
    const newBook = {
      id: String(books.length + 1),
      title: formData.title,
      author: formData.author,
      description: formData.description,
      genre: formData.genre,
      pages: Number.parseInt(formData.pages) || 0,
      year: Number.parseInt(formData.year) || new Date().getFullYear(),
      isbn: formData.isbn,
      copiesInLibrary: Number.parseInt(formData.copiesInLibrary) || 1,
      currentlyBorrowed: 0,
      available: true,
      cover: "/abstract-book-cover.png",
    }

    books.push(newBook)

    setSuccess(true)
    setFormData({
      title: "",
      author: "",
      description: "",
      genre: "",
      pages: "",
      year: "",
      isbn: "",
      copiesInLibrary: "1",
    })
    setIsSubmitting(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  if (!user || user.role !== "admin") {
    return null
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
          <h1 className="text-xl font-semibold text-foreground">Add New Book</h1>
        </div>

        <div className="max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Book Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}

                {success && (
                  <div className="flex items-center gap-2 text-sm text-success bg-success/10 px-3 py-2 rounded-lg">
                    <CheckCircle className="w-4 h-4" />
                    Book added successfully!
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">
                      Title <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter book title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="author">
                      Author <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="Enter author name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter book description"
                    rows={4}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="genre">
                      Genre <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.genre}
                      onValueChange={(value) => setFormData({ ...formData, genre: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                      <SelectContent>
                        {genres.map((genre) => (
                          <SelectItem key={genre} value={genre}>
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="isbn">ISBN</Label>
                    <Input
                      id="isbn"
                      value={formData.isbn}
                      onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                      placeholder="978-0-123456-78-9"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pages">Pages</Label>
                    <Input
                      id="pages"
                      type="number"
                      value={formData.pages}
                      onChange={(e) => setFormData({ ...formData, pages: e.target.value })}
                      placeholder="300"
                      min="1"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year">Publication Year</Label>
                    <Input
                      id="year"
                      type="number"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      placeholder="2024"
                      min="1800"
                      max={new Date().getFullYear()}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="copies">Number of Copies</Label>
                    <Input
                      id="copies"
                      type="number"
                      value={formData.copiesInLibrary}
                      onChange={(e) => setFormData({ ...formData, copiesInLibrary: e.target.value })}
                      placeholder="1"
                      min="1"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Adding book..." : "Add Book"}
                  </Button>
                  <Link href="/dashboard">
                    <Button type="button" variant="outline" className="bg-transparent">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
