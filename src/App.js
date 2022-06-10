import React, {useEffect, useState} from 'react';
import './App.css';
import  data  from './data.json';
import Card from './components/Card';
import ShowDetails from './components/ShowDetails';

function App() {
  const [listings, setListings] = useState([])
  const [filters, setFilters] = useState([])

 /* useEffect(() => {
    if(filters.length === 0) {
      setListings(data)
    }
      console.log(data)
  }, [filters])
  */
  
  const filterListings = (data) => {
    if (!filters.includes(data))
      setFilters([...filters, data])
      console.log(data)
  }

  const removeFilter = (removedFilter) => {
    const newKey = filters.filter( (filter) => filter !== removedFilter )
    setFilters(newKey)
    
    console.log(removedFilter)
    console.log(newKey)
    console.log(listings)
  }

  const updatedData = () => {
    if (filters) {
    const newData = data.filter((eachData) => {
      return filters.every((key) => {
        return (
          [...eachData.languages, ...eachData.tools, eachData.role, eachData.level].includes(key)
        );
      });
    });
    setListings(newData);
  } else {
    setListings(data);
  }
  console.log(filters)
};
useEffect(() => {
  updatedData();

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [filters]);

  
  return (
    <div className="App">
     <header className='jobHeader'>
       <div className="headerbg"></div>
     </header>
     { /*<Filter searchValue={searchValue} setSearchValue={setSearchValue} /> */}
     <section className='filterDetails'>
       {filters.length > 0 &&
        <ShowDetails filters={filters} setFilters={setFilters} removeFilter={removeFilter} />
         }
     </section>
     <section className="cardLayout">
       <div className='cardContainer'>
         { listings
          /*.filter(eachData => eachData.role.match(new RegExp(searchValue, "i"))) */
         .map((eachData, index) => (
           <Card data={eachData} key={eachData.id} className="eachCard" filtering={filterListings} />
         )) }
       </div>
     </section>
     <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="github.io">Muakone</a>.
      </div>
     </footer>
    </div>
  );
}

export default App;
