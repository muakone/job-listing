import React from 'react'
import FilterItems from './FilterItems'

const Card = ({data, filtering}) => {

  return (
    <section className='' key={data.id}>
        <div className={`card ${data.featured === true ? "FEATURED" : ""} `}>
            <div className={`listContainer`}>
                <div className="listDetails">
                    <img src={data.logo} alt={data.logo} />
                    <div className='listName'>
                        <div className="nameFeature">
                            <h5>{data.company}</h5>
                            <div className='dataButtons'>
                                <div>
                                    {data.new && <button className="new">NEW!</button> } 
                                </div>
                                <div>
                                    {data.featured && <button className="featuredButton">FEATURED</button>}
                                </div>    
                            </div>
                            
                        </div>
                        <div className='jobContainer'>
                            <div className="job">
                                <h2>{data.position}</h2>
                            </div>
                            <div className="duration">
                                <p>{data.postedAt}</p>
                                <p>&nbsp;•&nbsp;</p>
                                <p>{data.contract}.</p>
                                <p>&nbsp;•&nbsp;</p>
                                <p>{data.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <FilterItems data={data} filtering={filtering} />
            </div>
        </div>
    </section>
  )
}

export default Card