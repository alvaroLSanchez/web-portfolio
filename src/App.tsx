import { StrictMode } from 'react'

import './App.css'
import Routing from './routing/Routing.tsx'

import "./i18n.ts";


function App() {

  return (
    <StrictMode>
      <Routing />
    </StrictMode>
  )
}

export default App
