import {BrowserRouter as Router, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Hero from './Hero'
import FullCard from './FullCard'
import './App.css'
import WebsiteURL from './WebsiteURL'
import WebsiteLink from './WebsiteLink'


function App() {
    const [data, setData]= useState([])
    const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const responseBody = await response.json()
    setData(responseBody)
    }
      useEffect (() => {
        fetchData()
      }, [])
        
      

      console.log(window.location.href)
      console.log(window.location.protocol)
      console.log(window.location.host)
      console.log(window.location.pathname)

//  const url = (window.location.protocol + 
//  window.location.pathname.split('/')[2])

//  const Http = new XMLHttpRequest();

//  Http.open("GET", url);
//  Http.send();

//  Http.onreadystatechange = (e) => {
//  console.log(Http.responseURL) }


  return (
  <div className='App'>
  <Router>
    
  <div>

<Route exact path="/">
<Hero data={data}/>
</Route>

<Route path="/cards/:name">
<FullCard data={data}/>
</Route>
  
  <div>

<Route path="/routes/websites">
<WebsiteURL data={data}/> 
     
</Route>

<Route path="/links/">
 {/* render = { () => } */}
 <WebsiteLink/>


</Route> 

  </div>


  </div>


  </Router>

</div>

  )
}

export default App
