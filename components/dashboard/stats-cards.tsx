import { Card, CardContent } from "@/components/ui/card"
import { libraryStats } from "@/lib/mock-data"

export function StatsCards() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-xs text-muted-foreground">Total books</p>
            <p className="text-2xl font-bold text-foreground">{libraryStats.totalBooks.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Borrowed</p>
            <p className="text-2xl font-bold text-foreground">{libraryStats.borrowed}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Available</p>
            <p className="text-2xl font-bold text-foreground">{libraryStats.available.toLocaleString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
