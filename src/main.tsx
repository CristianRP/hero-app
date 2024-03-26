import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { HeroApp } from './HeroApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroApp />
    </BrowserRouter>
  </React.StrictMode>,
)
