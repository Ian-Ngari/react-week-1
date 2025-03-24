import React from 'react';
import BookItem from '../pages/BookItem';

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;