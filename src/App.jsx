import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Navber } from './components/Navber'
import { PainRelief } from './components/PainRelief'
import { FirstAid } from './components/FirstAid'
import { HeartHealth } from './components/HeartHealth'
import { SkinCare } from './components/SkinCare'
import { Contact } from './components/Contact'

function App() {
  <Navber/>
 let route = createBrowserRouter([
  {
    path : '/',
    element : <PainRelief/>
  },
  {
    path : '/FirstAid',
    element :<FirstAid/>
  },
  {
    path : '/HeartHealth',
    element : <HeartHealth/>
  },
  {
    path : '/SkinCare',
    element : <SkinCare/>
  },
  {
    path : '/Contact',
    element :<Contact/>
  }

 ])

  return (
   <RouterProvider router={route}/>
  )
}

export default App
