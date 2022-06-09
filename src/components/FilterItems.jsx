import React from 'react'

/*
div className="filterItems" key={data.id}>
        <button onClick={() => handleClick(data.role)}>{data.role}</button>
        <button onClick={handleClick}>{data.level}</button>
        <div>
            {data.languages.map(lang => (
                <button key={lang} onClick={handleClick}>{lang}</button>
            ))}
        </div>
        <div>
            {data.tools.map(tool => (
                tool === "" ? "" : 
                <button key={tool} onClick={handleClick}>{tool}</button>
            ))}
        </div>
    </div>
 */

const FilterItems = ({data, filtering, setShowDetails}) => {
    function handleClick(skill){
        filtering(skill)
    }
        
    return (

    <div className="filterItems" key={data.id}>
        <button onClick={() => handleClick(data.role)}>{data.role}</button>
        <button onClick={() => handleClick(data.level)}>{data.level}</button>
        <div className='langBtn'>
            {data.languages.map(lang => (
                <button key={lang} onClick={() => handleClick(lang)}>{lang}</button>
            ))}
        </div>
        <div className='langBtn'>
            {data.tools.map(tool => (
                tool === "" ? "" : 
                <button key={tool} onClick={() => handleClick(tool)}>{tool}</button>
            ))}
        </div>
    </div>
    
    )
}

export default FilterItems