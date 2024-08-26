// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'


const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className="h-[100%] flex">
      <Sidebar/>
      <Display/>
      </div>
      <Player/>
    </div>
  )
}

export default App
