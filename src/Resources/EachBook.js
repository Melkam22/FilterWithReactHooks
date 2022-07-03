import React from 'react';

function EachBook({eachData}) {

  return (
    <div className='eachBook'>
       <p>{eachData.id}</p>
       <p>{eachData.title}</p>
       <p>{eachData.body}</p>
    </div>

    // <div className='eachBook'>
    //    <p>{passEach.id}</p>
    //    <p>{passEach.title}</p>
    //    <p>{passEach.body}</p>
    // </div>
  );
}

export default EachBook;