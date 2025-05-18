import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Donaciones from './pages/Donaciones'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import DonacionExitosa from "./pages/DonacionExitosa";


function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/donacion-exitosa" element={<DonacionExitosa />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App