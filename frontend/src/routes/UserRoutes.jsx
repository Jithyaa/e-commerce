import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

const UserRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>

    </Routes>
  )
}

export default UserRoutes
