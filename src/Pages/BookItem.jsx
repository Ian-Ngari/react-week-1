import React from 'react';

const BookItem = ({ book }) => {
  
  const colors = [
    'bg-gradient-to-br from-purple-100 to-blue-100 border-purple-200',
    'bg-gradient-to-br from-blue-100 to-indigo-100 border-blue-200',
    'bg-gradient-to-br from-indigo-100 to-violet-100 border-indigo-200',
  ];
  const colorClass = colors[book.id % colors.length];

  return (
    <div className={`rounded-xl shadow-md overflow-hidden border ${colorClass} hover:shadow-lg transition-shadow duration-300`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-white bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center mr-4">
            <span className="text-indigo-800 font-bold">{book.id}</span>
          </div>
          <h3 className="text-xl font-bold text-indigo-900 font-serif">{book.title}</h3>
        </div>
        
        <div className="space-y-2 text-indigo-800">
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="font-medium">Author:</span> {book.author}
          </p>
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">Period:</span> {book.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookItem;