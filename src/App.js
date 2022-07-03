import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
//api imported from : https://jsonplaceholder.typicode.com/posts  instead of using local json db;
import AllBooks from './Resources/AllBooks';
//import FilterBook from './Resources/FilterBook';

function App() {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([])

  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setBooks(res.data)
    })
    .catch(err=>{
    })
  }, [])
//

const filterItem = (e) => {
  setFiltered(e.target.value);
}
//

const filterFunction = !filtered
? books
: books.filter((item) =>
    item.title.includes(filtered)
  );

console.log(filterFunction)

 

  
  return (
    <div className='mainFile'> 
    <div className='filterBook'>
        <h2>Filter books with different components and reacthooks</h2>
        <div className='searchBar'>
            <input type="text" placeholder="find title" value={filtered} onChange={filterItem}/>  
        </div> 
    </div>
    {/* <FilterBook myData={books}/>  */}
    {/* <FilterBook books={books}/> */}
    {/* <AllBooks myProps={books} /> */}
    <AllBooks myProps={filterFunction.length === 0  ? books : filterFunction}/>
    </div>
  );
}

export default App;