import React from 'react';

const BookItem = ({ book }) => {
  
  const bgColor = book.id % 2 === 0 ? 'bg-blue-50' : 'bg-indigo-50';
  
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-sm mb-4 border border-gray-200`}>
      <div className="flex items-start">
        <div className="bg-white rounded-md w-10 h-10 flex items-center justify-center mr-4 font-bold text-blue-800">
          {book.id}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{book.title}</h3>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Period:</span> {book.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookItem;