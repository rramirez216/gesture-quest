import React from 'react'
import Home from './pages/Home'
import Nav from './components/ui/Nav'

function App() {
  return (
    <main className='max-h-full h-full relative flex flex-col items-center gap-8 md:gap-16 justify-center bg-slate-100'>
      <Nav />
      <Home />
    </main>
  )
}

export default App
