import { useState } from 'react'
import { Navbar } from './components/navbar'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { About } from './pages/About'
import './App.css'
import Auth from "./components/auth"
import { Routes,Route } from 'react-router-dom'
import Admin from "./components/admin"

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'shop':
        return <Shop />
      case 'about':
        return <About />
      default:
        return <Home />
    }
  }

  return (
    <Routes>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/auth' element={<Auth/>} />
      <Route path='/' element={<div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>}/>
    </Routes>
    
  )
}

export default App
