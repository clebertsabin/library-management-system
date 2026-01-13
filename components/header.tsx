"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const { user, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Your Library</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Catalog
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={logout}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/catalog"
                className="text-sm text-muted-foreground hover:text-foreground px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Catalog
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                {user ? (
                  <>
                    <Link href="/dashboard" className="flex-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        logout()
                        setMobileMenuOpen(false)
                      }}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="flex-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" className="flex-1">
                      <Button size="sm" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
