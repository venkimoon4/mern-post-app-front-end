import React from 'react'
import Header from './components/Header'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Users/Login'
import Register from './Pages/Users/Register'
import Dashboard from './Pages/Users/Dashboard'
import Home from './Pages/Posts/Home'
import Update from './Pages/Users/Update'
import Create from './Pages/Users/Create'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>


        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />


        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='create' element={<Create/>}/>
        <Route path='update' element={<Update/>}/>

      </Route>



      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
