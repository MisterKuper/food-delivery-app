import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = 'http://localhost:4000';

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr/>
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path='/admin/add' element={<Add url={url}/>} />
          <Route path='/admin/list' element={<List url={url}/>} />
          <Route path='/admin/orders' element={<Orders url={url}/>} />
          <Route path='/admin' element={<Navigate url={'/admin/orders'}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
