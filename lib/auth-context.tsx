"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type User, users } from "./mock-data"

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem("library_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const foundUser = users.find((u) => u.email === email && u.password === password)
    if (foundUser) {
      setUser(foundUser)
      localStorage.setItem("library_user", JSON.stringify(foundUser))
      return true
    }
    return false
  }

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if user already exists
    const existingUser = users.find((u) => u.email === email)
    if (existingUser) {
      return false
    }

    // Create new user (in real app, this would be saved to DB)
    const newUser: User = {
      id: String(users.length + 1),
      name,
      email,
      password,
      role: "user",
    }
    users.push(newUser)
    setUser(newUser)
    localStorage.setItem("library_user", JSON.stringify(newUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("library_user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
