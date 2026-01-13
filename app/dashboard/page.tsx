"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { BorrowedBooksTable } from "@/components/dashboard/borrowed-books-table"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 p-4 md:p-6 space-y-6">
        <StatsCards />
        <BorrowedBooksTable />
        <QuickActions />
      </div>
    </div>
  )
}
