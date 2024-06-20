import { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './components/organisms/LoadingScreen/LoadingScreen'
import PortfolioPage from './components/organisms/PortfolioPage/PortfolioPage'

const App = () => {

  
  useEffect(() =>{
    const timer = setTimeout(() =>{
      window.scrollTo(0,0);
    }, 10);

    return () => clearTimeout(timer)

  }, []);

  return (
    <>
      <LoadingScreen/>
      <PortfolioPage/>
    </>
  )
}

export default App
