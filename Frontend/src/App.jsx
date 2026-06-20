import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { AddStudent, Login, SignUp, Studentlist, } from './Pages/'
import Layout from '../src/component/layout';

const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Layout />} >
        <Route path='addstudent' element={<AddStudent/>} />
        <Route path='studentlist' element={<Studentlist/>} />
      </Route>
    </Routes>
  )
}

export default App