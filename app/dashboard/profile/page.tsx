"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { useAuth } from "@/lib/auth-context"
import { ArrowLeft } from "lucide-react"

export default function ProfilePage() {
  const { user, logout } = useAuth()

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
          <h1 className="text-xl font-semibold text-foreground">Profile</h1>
        </div>

        <div className="max-w-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={user?.name || ""} readOnly className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={user?.email || ""} readOnly className="mt-1" />
              </div>
              <div>
                <Label>Role</Label>
                <p className="text-sm text-muted-foreground mt-1 capitalize">{user?.role || "User"}</p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Button variant="destructive" onClick={logout}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
