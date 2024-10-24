import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import UInavigation from '../components/UInavigation'
import { routes } from './routes'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Users from '../pages/Users'
import Userpage from '../pages/Userpage'

const Router:React.FC = () => {
  return (
   <Routes>
        <Route path='/' element={<UInavigation routes={routes}/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/users' element={<Users/>}/>
        </Route>

        <Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>

        <Route path='/getuser' element={<Userpage/>}/>
   </Routes>
  )
}

export default Router