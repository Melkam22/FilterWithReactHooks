import React from 'react';


function AllBooks({myProps=[]}) {
 // const [data, setData] = useState();
 console.log(myProps)
  return (
    <div>
      {myProps.map(books=>(
            <p key={books.id}>{books.title}</p> 
  ))}
    </div>
  );
}

export default AllBooks;