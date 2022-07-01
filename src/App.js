import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
//api imported from : https://jsonplaceholder.typicode.com/posts  instead of using local json db;
import AllBooks from './Resources/AllBooks';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setBooks(res.data)
    })
    .catch(err=>{
    })
  })
  
  return (
    <div> 
          {/* {books.map(book=>(
            <p key={book.id}>{book.title}</p> 
  ))} */}
    <AllBooks myProps={books} />
    </div>
  );
}

export default App;