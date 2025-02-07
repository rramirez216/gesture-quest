import React from 'react'
import Home from './pages/Home'
import Nav from './components/ui/Nav'
import Footer from './components/ui/Footer'

function App() {
  return (
    <div className='max-h-full h-full relative flex flex-col items-center gap-8 md:gap-16 justify-center bg-slate-100'>
      <Nav />
      <Home />
      <Footer />
    </div>
  )
}

export default App
