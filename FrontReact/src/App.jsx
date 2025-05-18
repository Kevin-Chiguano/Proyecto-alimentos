import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Donaciones from './pages/Donaciones'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donaciones" element={<Donaciones />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App