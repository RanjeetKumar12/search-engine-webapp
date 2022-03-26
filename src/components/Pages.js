import {React, useEffect, useState} from 'react'
import SinglePage from './SinglePage'
import Pagination from './Pagination'

const Pages = ({data}) => {
    const [results, setResults] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [resultsPerPage, setResultsPerPage] = useState(10)

    useEffect(() =>{
        setLoading(true)
        setResults(data)
        setLoading(false)
    },[data])
    
    
    console.log(results)
    const indexOfLastPage = currentPage * resultsPerPage
    const indexOfFirstPage = indexOfLastPage - resultsPerPage 
    const currentResults = results.slice(indexOfFirstPage, indexOfLastPage) 
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
      <>
    <div>
        <SinglePage results= {currentResults} loading= {isLoading} />
        <Pagination resultsPerPage = {resultsPerPage} totalResults={results.length} paginate={paginate}/>
    </div>
    </>
  )
}

export default Pages