import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import AllBooks from './Resources/AllBooks';

function App() {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([])

  //imported data via api instead of using local json db;
  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setBooks(res.data)
    })
    .catch(err=>{
    })
  })

const filterItem = (e) => {
  setFiltered(e.target.value);
}

//const upperCaseResult = filtered.toUpperCase();
const filterFunction = !filtered
? books
: books.filter(item => item.title.includes(filtered));
 

  
  return (
    <div className='mainFile'> 
    <div className='filterBook'>
        <h2>Filter books with different components and reacthooks</h2>
        <div className='searchBar'>
            <input type="text" placeholder="find title" value={filtered} onChange={filterItem}/>  
        </div> 
    </div>
    <AllBooks myProps={filterFunction.length === 0  ? books : filterFunction}/>
    </div>
  );
}

export default App;