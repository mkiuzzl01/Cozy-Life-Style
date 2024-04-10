import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routs/Routs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>
    <Root></Root>
   </RouterProvider>
  </React.StrictMode>,
)
