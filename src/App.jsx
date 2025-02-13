import React from 'react'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import Single from './pages/home/single/Single'
import Write from './pages/home/write/Write'
import Settings from './pages/setting/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { Route, Routes} from 'react-router-dom'
import Post from './components/post/Post'


export default function App() {
  return (
<>
 <Topbar />
 <Routes>
 <Route path="/" element={<Home />} />
        <Route path="/single" element={<Single />} />
       
        <Route path="/Write" element={<Write />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

 </Routes>
 </>




  )
}
