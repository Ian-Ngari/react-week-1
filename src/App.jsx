// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Route , Routes} from 'react-router-dom'
// import Nav from './Pages/Nav'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Courses from './Pages/courses'
// import Foot from './Pages/Foot'
// import Home from './Pages/Home'
// import english from './Pages/english'
// import History from './Pages/History'
// import mathematics from './Pages/mathematics'






// function App() {
 

//   return (
//     <>
//      <Nav/>
//      <Routes>
//  <Route path='/' element={<Home/>}/>
//  <Route path='/about' element={<About/>}/>
//  <Route path='/contact' element={<Contact/>}/>
//  <Route path='/courses' element={<Courses/>}>
//  <Route path='mathematics' element={<Mathematics/>}/>
//  <Route path='english' element={<English/>}/>
//  <Route path='history' element={<History/>} />
//  </Route>
//  </Routes>
//  <Foot/>
//     </>
//   )
// }

// export default App


import React from 'react';
import BookList from './Pages/Booklist';

const App = () => {
  const books = [
    { id: 1, title: 'Genesis', author: 'Moses', year: '1450 - 1410 BC' },
    { id: 2, title: 'Exodus', author: 'Moses', year: '1450 - 1410 BC' },
    { id: 3, title: 'Leviticus', author: 'Moses', year: '1444 - 1445 BC' },
    { id: 4, title: 'Numbers', author: 'Moses', year: '1445 - 1405 BC'},
    { id: 5, title: 'Deuteronomy', author: 'Moses', year: '1407 - 1406 BC'},
    { id: 6, title: 'Joshua', author: 'Joshua and Phinehas', year: '1405 - 1383 BC'},
    { id: 7, title: 'Judges', author: 'Samuel', year: '1086 - 1004 BC'},
    { id: 8, title: 'Ruth', author: 'Ruth', year: '1375 - 1050 BC'},
    { id: 9, title: '1st Samuel', author: 'Samuel, Nathan and Gad', year: '930 BC'},
    { id: 10, title: '2nd Samuel', author: 'Unknown', year: '930 BC'},
   
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Books of the Old Testament
        </h1>
        <BookList books={books} />
      </div>
    </div>
  );
};

export default App;