import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
//api imported from : https://jsonplaceholder.typicode.com/posts  instead of using local json db;

function App() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log(res)
      setBooks(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  })
  
  return (
    <div> 
          {books.map(book=>(
            <p>{book.title}</p> 
  ))}

      {/* <AllBooks data={data = DataList} /> */}
    </div>
  );
}

export default App;