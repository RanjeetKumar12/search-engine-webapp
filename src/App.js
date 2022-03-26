import {useState} from 'react';
import './App.css';
import Image from '../src/google.png'
import Pages from '../src/components/Pages'

function App() {
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState([])

  function handleQuery(e) {
    e.preventDefault()
    let axios = require("axios").default;
    let options = {
      method: 'GET',
      url: 'https://google-web-search.p.rapidapi.com/',
      params: {query: query, gl: 'US', max: '100'},
      headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      }
    };

    // const getResponse = async() => {
    //   try{
    //   const res = await axios.request(options)
    //   const resData = await res.data.results
    //   console.log(resData)
    //   }
    //   catch (err) {
    //     console.error(err)
    //   }
    // }
    // getResponse()
    axios.request(options).then(function (res) {
      setResponse(res.data.results);
    }).catch(function (error) {
      console.error(error);
    });

  }
  return (
    <div className="container">
      <div className="inner-container">
      <img src={Image} alt="Google Doodle" />
      <form className="form">
      <input type="text" className = "queryInput" onChange = {(e) => setQuery(e.target.value)} value={query}/>
      <button type="submit" onClick={handleQuery}>Search</button>
      </form>
      </div>
      <div className="resultBox">
        <Pages data={response}/>
      </div>
    </div>
  );
}

export default App;
