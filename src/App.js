import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Hero from './Hero';
import FullCard from './FullCard'
import './App.css'

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
    
     console.log(data)
        

  return (
    <div className='App'>
     <Router>
     <Route exact path="/">
        <Hero data={data}/>
      </Route>
       <Route path="/cards/:name">
        <FullCard data={data}/>
     </Route>
   </Router>
</div>
  )
}

export default App
