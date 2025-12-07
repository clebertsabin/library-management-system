import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookDetailsPage from './pages/BookDetailsPage';
import ReadingListPage from './pages/ReadingListPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<BookListPage />} />
        <Route path="/works/:id" element={<BookDetailsPage />} />
        <Route path="/reading-list" element={<ReadingListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
