export interface Book {
  id: string
  title: string
  author: string
  cover: string
  description: string
  genre: string
  pages: number
  year: number
  isbn: string
  copiesInLibrary: number
  currentlyBorrowed: number
  available: boolean
}

export interface BorrowedBook {
  id: string
  bookId: string
  userId: string
  borrowedOn: string
  dueDate: string
  status: "on-time" | "due-soon" | "overdue"
}

export interface Review {
  id: string
  bookId: string
  userId: string
  userName: string
  rating: number
  content: string
  createdAt: string
}

export interface User {
  id: string
  name: string
  email: string
  password: string
  role: "user" | "admin"
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "/the-midnight-library-book-cover-dark-mystical.jpg",
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever. Each book offers a chance to try another life you could have lived. Follow Nora as she explores regret, possibility, and the power of choice.",
    genre: "Fiction",
    pages: 304,
    year: 2020,
    isbn: "978-0525559474",
    copiesInLibrary: 5,
    currentlyBorrowed: 2,
    available: true,
  },
  {
    id: "2",
    title: "The Night Library",
    author: "Emma Clarke",
    cover: "/the-night-library-book-cover-dark-atmospheric.jpg",
    description: "A haunting tale of secrets hidden within the walls of an ancient library that only opens at night.",
    genre: "Fiction",
    pages: 288,
    year: 2023,
    isbn: "978-0525559475",
    copiesInLibrary: 4,
    currentlyBorrowed: 1,
    available: true,
  },
  {
    id: "3",
    title: "Designing Systems",
    author: "Khalid Moreau",
    cover: "/designing-systems-book-cover-modern-architecture.jpg",
    description: "A comprehensive guide to building scalable and maintainable design systems for modern applications.",
    genre: "Non-fiction",
    pages: 420,
    year: 2024,
    isbn: "978-0525559476",
    copiesInLibrary: 3,
    currentlyBorrowed: 2,
    available: true,
  },
  {
    id: "4",
    title: "Stories for Tomorrow",
    author: "Celia Wong",
    cover: "/stories-for-tomorrow-book-cover-colorful-children.jpg",
    description: "A collection of heartwarming stories designed to inspire the next generation of readers.",
    genre: "Children",
    pages: 156,
    year: 2024,
    isbn: "978-0525559477",
    copiesInLibrary: 6,
    currentlyBorrowed: 0,
    available: true,
  },
  {
    id: "5",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover: "/the-silent-patient-book-cover-thriller-mysterious.jpg",
    description:
      "A woman shoots her husband and then stops speaking. A criminal psychotherapist becomes obsessed with uncovering her motive.",
    genre: "Thriller",
    pages: 336,
    year: 2019,
    isbn: "978-1250301697",
    copiesInLibrary: 4,
    currentlyBorrowed: 3,
    available: true,
  },
  {
    id: "6",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "/atomic-habits-book-cover-minimalist-self-help.jpg",
    description: "Tiny changes, remarkable results. Learn how small habits lead to extraordinary outcomes.",
    genre: "Self-Help",
    pages: 320,
    year: 2018,
    isbn: "978-0735211292",
    copiesInLibrary: 5,
    currentlyBorrowed: 4,
    available: true,
  },
  {
    id: "7",
    title: "Clean Architecture",
    author: "Robert C. Martin",
    cover: "/clean-architecture-book-cover-technical-programmin.jpg",
    description: "A craftsman's guide to software structure and design principles.",
    genre: "Technology",
    pages: 432,
    year: 2017,
    isbn: "978-0134494166",
    copiesInLibrary: 3,
    currentlyBorrowed: 2,
    available: true,
  },
  {
    id: "8",
    title: "The Infinite Shelf",
    author: "Sarah Nunez",
    cover: "/the-infinite-shelf-book-cover-fantasy-magical-libr.jpg",
    description: "A gentle guide to building reading habits that last a lifetime.",
    genre: "Self-Help",
    pages: 240,
    year: 2024,
    isbn: "978-0525559478",
    copiesInLibrary: 4,
    currentlyBorrowed: 1,
    available: true,
  },
  {
    id: "9",
    title: "The Invisible Life",
    author: "V. E. Schwab",
    cover: "/the-invisible-life-book-cover-ethereal-moody.jpg",
    description: "A story about memory, identity, and the marks we leave on the world.",
    genre: "Fiction",
    pages: 448,
    year: 2022,
    isbn: "978-0765387561",
    copiesInLibrary: 5,
    currentlyBorrowed: 2,
    available: true,
  },
  {
    id: "10",
    title: "Before the Coffee",
    author: "Toshikazu Kawaguchi",
    cover: "/before-the-coffee-book-cover-cozy-cafe-warm.jpg",
    description: "In a small back alley café, visitors can travel back in time—but there are rules.",
    genre: "Fiction",
    pages: 272,
    year: 2021,
    isbn: "978-1335430991",
    copiesInLibrary: 4,
    currentlyBorrowed: 1,
    available: true,
  },
  {
    id: "11",
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    cover: "/the-pragmatic-programmer-book-cover-tech-classic.jpg",
    description: "Your journey to mastery. A guide from journeyman to master developer.",
    genre: "Technology",
    pages: 352,
    year: 2019,
    isbn: "978-0135957059",
    copiesInLibrary: 3,
    currentlyBorrowed: 2,
    available: true,
  },
]

export const users: User[] = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    password: "password123",
    role: "user",
  },
  {
    id: "2",
    name: "Admin User",
    email: "admin@library.com",
    password: "admin123",
    role: "admin",
  },
]

export const borrowedBooks: BorrowedBook[] = [
  {
    id: "1",
    bookId: "6",
    userId: "1",
    borrowedOn: "2025-03-12",
    dueDate: "2025-03-26",
    status: "due-soon",
  },
  {
    id: "2",
    bookId: "7",
    userId: "1",
    borrowedOn: "2025-03-01",
    dueDate: "2025-03-15",
    status: "on-time",
  },
  {
    id: "3",
    bookId: "1",
    userId: "1",
    borrowedOn: "2025-02-20",
    dueDate: "2025-03-06",
    status: "overdue",
  },
]

export const reviews: Review[] = [
  {
    id: "1",
    bookId: "1",
    userId: "1",
    userName: "Priya Sharma",
    rating: 4,
    content: "A moving exploration of regret and second chances. Perfect for readers who enjoy introspective stories.",
    createdAt: "2025-01-15",
  },
  {
    id: "2",
    bookId: "1",
    userId: "2",
    userName: "Daniel Kim",
    rating: 3,
    content: "Engaging concept and pacing, though the ending felt a bit predictable. Still worth the read.",
    createdAt: "2025-01-20",
  },
  {
    id: "3",
    bookId: "1",
    userId: "3",
    userName: "Priya S.",
    rating: 4,
    content: "Thought-provoking and comforting at the same time.",
    createdAt: "2025-02-01",
  },
]

export const libraryStats = {
  totalBooks: 2430,
  borrowed: 118,
  available: 2312,
  activeMembers: 1200,
  onTimeReturns: "98%",
}
