import { useState } from 'react'
import { Navbar } from '../components/navbar'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { About } from './pages/About'
import './App.css'

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
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

export default App
