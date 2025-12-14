export default function Sidebar() {
  return (
    <aside className="w-full max-w-xs">
      <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
        <div className="flex items-center gap-3 font-semibold text-lg mb-8">
          <div className="h-7 w-7 rounded-md bg-blue-600" />
          Your Library
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <a className="inline-block px-3 py-2 rounded-lg bg-blue-600 text-white" href="#">Home</a>
          <a className="inline-block px-3 py-2 rounded-lg hover:bg-blue-50" href="#">My Books</a>
          <a className="inline-block px-3 py-2 rounded-lg hover:bg-blue-50" href="#">Borrow / Return</a>
          <a className="inline-block px-3 py-2 rounded-lg hover:bg-blue-50" href="#">Add Book (admin)</a>
        </nav>

        <div className="mt-10 text-sm text-gray-600">
          <h4 className="font-semibold mb-2">Account</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Profile</a></li>
            <li><a href="#" className="hover:text-blue-600">Sign out</a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}