import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Clock, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">About Your Library</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Your Library is a modern digital library platform designed to make discovering, borrowing, and managing
            books easier than ever.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Vast Collection</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Access over 24,000 titles across fiction, non-fiction, technology, and more.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Community Driven</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Join 1,200+ active members sharing reviews and recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Easy Borrowing</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    14-day loan periods with easy renewals and no late fees for first-time delays.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Quality Service</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    98% on-time return rate with personalized recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-xl font-semibold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe that access to books should be simple and enjoyable. Our platform combines the charm of
            traditional libraries with modern technology, making it easy for everyone to discover new stories, learn new
            skills, and connect with fellow readers. Whether you&apos;re looking for the latest bestseller or a hidden
            gem, Your Library is here to help you find your next great read.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
