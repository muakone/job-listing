import React from 'react'

const Filter = ({searchValue, setSearchValue}) => {
  return (
    <div className='header'>
        <div>
            <h1 className='header-text'>Looking for Gift Card?</h1>
        </div>
        <div>
            <input
                type="text"
                name="search"
                value={searchValue}
                placeholder="Search for Gift Cards ..."
                className='input-bar'
                onChange={e => setSearchValue(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Filter