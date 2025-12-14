import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function HomePage() {
  const [q, setQ] = useState('');
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Sidebar />

          {/* Main left column */}
          <main className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <header className="flex items-center justify-between mb-6">
                <div>
                  <div className="inline-block bg-slate-100 px-3 py-1 rounded-full text-xs mb-3">Welcome to Your Library</div>
                  <h1 className="text-4xl font-bold leading-tight mb-4">Discover, borrow, and manage your books in one place.</h1>
                  <p className="text-gray-600 max-w-lg">Search thousands of titles, track what you've borrowed, and explore personalized recommendations — all from your modern digital library.</p>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <nav className="hidden md:flex gap-4 text-sm">
                    <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Catalog</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Login</a>
                  </nav>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Sign Up</button>
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <input
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Search by title, author, or ISBN"
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none"
                    />
                    <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">Search catalog</button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 max-w-sm">
                    <Stat value="24k+" label="Books" />
                    <Stat value="1.2k" label="Active members" />
                    <Stat value="98%" label="On-time returns" />
                  </div>

                  <section className="mt-8">
                    <h2 className="text-lg font-semibold mb-4">Featured books</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <FeaturedCard title="The Night Library" author="Emma Clarke" status="Available" />
                      <FeaturedCard title="Designing Systems" author="Khalid Moreau" status="On loan – 3 days left" />
                      <FeaturedCard title="Stories for Tomorrow" author="Celia Wong" status="Available" />
                    </div>
                  </section>
                </div>

                <aside className="space-y-4">
                  <div className="bg-blue-50 rounded-2xl p-4">
                    <h3 className="text-sm font-semibold mb-3">Today at a glance</h3>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-500">Borrowed</div>
                        <div className="font-semibold">36</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-500">Available</div>
                        <div className="font-semibold">1,204</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="mb-2">Recently borrowed</p>
                      <ul className="list-disc ml-4">
                        <li>“The Silent Patient” — Due in 5 days</li>
                        <li>“Atomic Habits” — Due tomorrow</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 text-sm text-gray-600">
                    <p>© 2025 Your Library</p>
                  </div>
                </aside>
              </div>
            </div>

            <footer className="mt-6 text-sm text-gray-500">
              <div className="flex items-center justify-between">
                <div>© 2025 Your Library</div>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-gray-800">Privacy</a>
                  <a href="#" className="hover:text-gray-800">Terms</a>
                  <a href="#" className="hover:text-gray-800">Support</a>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-blue-50 rounded-lg p-3 text-center">
      <div className="font-semibold">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}

function FeaturedCard({ title, author, status }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="h-36 bg-gray-200 rounded mb-3" />
      <div className="text-sm">
        <div className="font-semibold mb-1">{title}</div>
        <div className="text-xs text-gray-500 mb-2">{author}</div>
        <span className="inline-block text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{status}</span>
      </div>
    </div>
  );
}