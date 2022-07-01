import React from 'react';
import EachBook from './EachBook';

function AllBooks({myProps=[]}) {

let result = myProps.map((books)=>{
    return(
        <div>
            <EachBook eachData={books=books} />    
        </div>
    )
})

  return (
    <div>
        {result}
    </div>
 
  );
}

export default AllBooks;