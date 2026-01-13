"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Home, BookCopy, ArrowLeftRight, Plus, User, LogOut } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { cn } from "@/lib/utils"

const mainNavItems = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/dashboard/my-books", label: "My Books", icon: BookCopy },
  { href: "/dashboard/borrow-return", label: "Borrow / Return", icon: ArrowLeftRight },
]

const adminNavItems = [{ href: "/dashboard/add-book", label: "Add Book (admin)", icon: Plus }]

const accountNavItems = [{ href: "/dashboard/profile", label: "Profile", icon: User }]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const isAdmin = user?.role === "admin"

  return (
    <aside className="w-64 border-r border-border bg-sidebar min-h-screen p-4 hidden md:block">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <BookOpen className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-semibold text-sidebar-foreground">Your Library</span>
      </Link>

      {/* Main Navigation */}
      <nav className="space-y-1">
        {mainNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent",
              )}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          )
        })}

        {/* Admin Items */}
        {isAdmin &&
          adminNavItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent",
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            )
          })}
      </nav>

      {/* Account Section */}
      <div className="mt-8">
        <p className="text-xs text-muted-foreground px-3 mb-2">Account</p>
        <nav className="space-y-1">
          {accountNavItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent",
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            )
          })}
          <button
            onClick={logout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent w-full transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </nav>
      </div>
    </aside>
  )
}
