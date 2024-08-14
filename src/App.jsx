import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Admin from './pages/Admin'
import BlogContext from './context/BlogContext'

function App() {
  const [isAuth, setIsAuth] = useState(true)
  const [count, setCount] = useState(0)

  return (
    <>
    <BlogContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
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
