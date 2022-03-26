import React from 'react'
import '../App.css'

const Pagination = ({resultsPerPage, totalResults, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <div>
        <ul className="pagination">
            {pageNumbers.map((num) => {
            return <li className="pageNum" onClick = {() => paginate(num)} key = {num}>{num}</li>
            })}
        </ul>
    </div>
  )
}

export default Pagination