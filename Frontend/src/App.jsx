import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import {Login , SignUp } from './Pages/'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
   </Routes>
  )
}

export default App