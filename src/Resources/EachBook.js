import React from 'react';

function EachBook({eachData}) {
 
  return (
    <div className='eachBook'>
       <p>{eachData.id}</p>
       <p>{eachData.title}</p>
       <p>{eachData.body}</p>
    </div>
  );
}

export default EachBook;