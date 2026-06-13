import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import {Login , SignUp } from './Pages/'
import Layout from '../src/component/layout';


const App = () => {
  return (
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/' element={<Layout/>} >

    </Route>
   </Routes>
  )
}

export default App