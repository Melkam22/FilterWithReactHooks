import React from 'react';
import EachBook from './EachBook';

function AllBooks({myProps=[]}) {

let result = myProps.map((books)=>{
    return(
        <div className='allBooks'>
            <EachBook eachData={books=books} />    
        </div>
    )
})

  return (
    <div className='showAllBooks'>
        {result}
    </div>
 
  );
}

export default AllBooks;