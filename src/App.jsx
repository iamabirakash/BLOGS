import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Admin from './pages/Admin'
import BlogContext from './context/BlogContext'
import { Toaster } from 'react-hot-toast'

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <>
    <BlogContext.Provider value={{ isAuth, setIsAuth, blogs, setBlogs, userAuthenticated, setUserAuthenticated }}>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog/:id" element={<Blog />} />
          {/* dynamic routing */}
        </Routes>
      </BrowserRouter>
    </BlogContext.Provider>
    </>
  )
}

export default App
