import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieBanner from './components/MovieBanner'
import MovieNames from './components/MovieName'
import Buttons from './components/Buttons'
import MoviesList from './components/MoviesList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MovieBanner />
        <MoviesList names={["nanna","kalki","rrr"]} />
       
      </div>
      
    </>
  )
}

export default App
