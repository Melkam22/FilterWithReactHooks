import React, { useState} from 'react';

function FilterBook({myData}) {

   const [filtered, setFiltered] = useState([])
    //console.log(filtered)
   const filterItem = (e) => {
    setFiltered(e.target.value);
   }
 
   const filterFunction = !filtered
    ? myData
    : myData.filter((item) =>
        item.title.includes(filtered)
      );
 console.log(filterFunction)

//  this.setState({
//     setFiltered: filterFunction
//   })



  return (
    <div className='filterBook'>
        <h2>Filter books with different components and reacthooks</h2>
        <div className='searchBar'>
            <input type="text" placeholder="find title" value={filtered} onChange={filterItem}/>
        </div> 
    </div>
  );
}

export default FilterBook;