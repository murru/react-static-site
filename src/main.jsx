import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './templates/App'
import Facts from './views/Facts'
import Authors from './views/Authors'
import NotFound from './views/NotFound'
import './assets/style/_main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="*" element={ <NotFound /> }></Route>
        <Route path="/" element={ <App /> }>
          <Route path="/" element={<Facts />} />
          <Route path="/authors" element={<Authors />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)