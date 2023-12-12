import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App.tsx'
import CurrentProject from './pages/CurrentProject.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <App />
    <CurrentProject />

  </React.StrictMode>,
)
