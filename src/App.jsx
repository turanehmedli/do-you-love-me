import React from 'react'
import YesOrYes from './pages/YesOrYes'
import { Route, Router, Routes } from 'react-router'
import EndPage from './pages/EndPage'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <div className='w-full min-h-screen h-fit flex  justify-center bg-[url(/bgLove.png)] overflow-hidden p-2'>
      <Routes>
        <Route path='/' element={ <YesOrYes/>}/>
        <Route path='*' element={ <PageNotFound/>}/>
        <Route path='/end' element={ <EndPage/>}/>
      </Routes>

    </div>
  )
}

export default App