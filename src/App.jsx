import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Admin from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/blog/:id" element={<Blog />} />
        {/* dynamic routing */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
