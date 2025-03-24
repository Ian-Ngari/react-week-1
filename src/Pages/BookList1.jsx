import React from 'react';
import BookItem from './BookItem1';

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