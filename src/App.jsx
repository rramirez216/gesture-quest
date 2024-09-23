import React from 'react'
import { styled } from '@linaria/react'
import Home from './pages/Home'

function App() {
  return (
    <Main>
      <Home />
    </Main>
  )
}

const Main = styled.main`
  max-height: 100%;
  height: 100%;
  position: relative;
  color: hsl(195deg 72% 22%);
`
export default App
