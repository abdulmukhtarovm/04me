import React from 'react'
import Header from './components/Header'
import HowtoOrder from './components/HowtoOrder'
import Openers from './components/Openers'
import Promokod from './components/Promokod'

const App = () => {
  return (
    <>
    <Header/>
    <HowtoOrder/>
    <Promokod/>
    <Openers/>
    <div className='m-5'></div>
    </>
  )
}

export default App