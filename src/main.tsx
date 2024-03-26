import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { HeroApp } from './HeroApp'

import './styles.css'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroApp />
    </BrowserRouter>
  </React.StrictMode>,
)
