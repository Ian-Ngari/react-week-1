import React from 'react';
import BookItem from '../pages/BookItem';

const BookList = ({ books }) => {
  return (
    <div className="space-y-4">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;