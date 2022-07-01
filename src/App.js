import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
//api imported from : https://jsonplaceholder.typicode.com/posts  instead of using local json db;
import AllBooks from './Resources/AllBooks';
import FilterBook from './Resources/FilterBook';

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

//   const filtered = (e) => {
//   const comparedItem = e.target.value;
//   // const filteredValue = myProps.filter((item)=>{
//   //   return item.title(comparedItem);
//   // })
//   console.log(comparedItem)
// }


  
  return (
    <div className='mainFile'> 
    <FilterBook myData={books}/>
    <AllBooks myProps={books} />
    {/* <AllBooks myProps={filtered.length === 0 ? books : filteredValue} /> */}
    </div>
  );
}

export default App;