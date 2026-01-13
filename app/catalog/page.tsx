import { Suspense } from "react"
import { CatalogContent } from "@/components/catalog/catalog-content"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CatalogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<CatalogLoading />}>
          <CatalogContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

function CatalogLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-muted rounded mb-6" />
        <div className="h-10 w-full bg-muted rounded mb-8" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-muted rounded-lg h-72" />
          ))}
        </div>
      </div>
    </div>
  )
}
