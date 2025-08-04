import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('books'); // default view

  const books = [
    { id: 1, title: "React Made Easy", author: "Dan Abramov" },
    { id: 2, title: "JS Deep Dive", author: "Kyle Simpson" },
    { id: 3, title: "Learning Hooks", author: "Sarah Drasner" },
  ];


  let content;
  if (view === 'books') {
    content = <BookDetails books={books} />;
  } else if (view === 'blogs') {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>🧑‍💻 Blogger App</h1>

    
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setView('books')}>Books</button>
        <button onClick={() => setView('blogs')}>Blogs</button>
        <button onClick={() => setView('courses')}>Courses</button>
      </div>

      {content}

      <div style={{ marginTop: '40px' }}>
        <h3>🔍 Bonus Info:</h3>
        {books.length > 0 && <p>We have {books.length} books in our library.</p>}
      </div>
    </div>
  );
}

export default App;
