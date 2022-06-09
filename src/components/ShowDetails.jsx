import React from 'react'
import iconRemove from "../images/icon-remove.svg"

const ShowDetails = ({filters, removeFilter, setFilters}) => {
    const handleClear = () => {
        setFilters([])
    }

    
  return (
    <div className='showDetails'>
        <div className="filterElement">
            {filters.map(filter => 
            <div className='filter' key={filter}>
                <button className='cardFilterButton'>
                 {filter}
                </button>
                <span onClick={() => removeFilter(filter)} className="removeFilter">
                    <img src={iconRemove} alt="iconRemove" />
                </span>
            </div>
                )}
            
        </div>
        <div>
            <p className='closeDetails' onClick={handleClear}>
                Clear
            </p>
        </div>
    </div>
  )
}

export default ShowDetails