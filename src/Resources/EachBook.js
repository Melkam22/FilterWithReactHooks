import React from 'react';


function EachBook({eachData}) {
    //console.log(eachData)
  return (
    <div className='eachData'>
       <p>{eachData.id}</p>
       <p>{eachData.title}</p>
       <p>{eachData.body}</p>
    </div>
  );
}

export default EachBook;