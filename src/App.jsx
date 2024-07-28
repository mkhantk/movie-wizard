import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bgImg from './assets/movieposters.jpeg'
import Home from './intro'
import Genre from './genre'
import Result from './result'

function App() {
  // const [count, setCount] = useState(0)
  const [currentComponent, setCurrentComponent] = useState('Home')
  const [selectedGenre, setSelectedGenre] = useState([])

  const renderComponent = () => {
    if (currentComponent === 'Home') {
      return (
        <Home switchToGenre={() => setCurrentComponent('Genre')}/>
      )
    } else if (currentComponent === 'Genre') {
      return (
        <Genre 
        switchToResult={() => setCurrentComponent('Result')}
        setGenres={setSelectedGenre}
        />
        
      )
      
    } else if (currentComponent === 'Result') {
      return (
        <Result 
        genre={selectedGenre}
        switchToHome={() => {
          setCurrentComponent('Home');
          setSelectedGenre([])
        }} />
      )
    }
    //there is going to be the result component
    // console.log({selectedGenre})
  }
  console.log(selectedGenre)

  return (
    <>
      <div style={{ backgroundImage: `url(${bgImg})` }} 
      className='flex flex-col justify-between items-center min-h-screen w-full bg-repeat bg-auto'>
        <header className='flex items-center bg-black bg-opacity-80 w-screen ring p-5 '>
          <div className="logo text-4xl font-bold mr-auto hover:hover:text-indigo-500" ><a href="">Movie Wizard</a></div>
          <nav>
            <ul className='flex gap-5 text-xl hover:text-indigo-500'>
              <li><a className='hover:text-indigo-500' href="">home</a></li>
              <li><a className='hover:text-indigo-500' href="#">about</a></li>
            </ul>
          </nav>
        </header>

        <main className='w-1/2 min-w-[350px] flex flex-col justify-center items-center gap-5 ring rounded-lg p-5 bg-black bg-opacity-50'>
          {renderComponent()}
        </main>

        <footer>coded by Min Khant Kyaw</footer>
        <div id='overlay' className='fixed inset-0 bg-black opacity-75 z-[0]'></div>
      </div>
    </>
  )
}

export default App
