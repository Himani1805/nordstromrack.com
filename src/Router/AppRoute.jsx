import React from 'react'
import { Route, Routes } from 'react-router'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'

export default function AppRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}
