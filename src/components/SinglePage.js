import {React} from 'react'
import '../App.css'
const SinglePage = ({results, loading}) => {
    
  if(loading){
    return <h2>Loading...</h2>
  } 
  return (
    <div>
        {results.map((item, index) => {
          return <div className="searchResult">
            <h3 key={index}>{item.title}</h3>
            <p key={Math.random()}>{item.description}</p>
            <a href = {Math.random()} key={index}>{item.url}</a>
          </div>
        })}
    </div>
  )
}

export default SinglePage