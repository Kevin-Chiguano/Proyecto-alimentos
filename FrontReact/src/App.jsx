import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Blog1 from './pages/Blog1';      // Página del blog 1
import Blog2 from './pages/Blog2';      // Página del blog 2
import Donaciones from './pages/Donaciones'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import DonacionExitosa from "./pages/DonacionExitosa"
import GraciasMensaje from "./pages/GraciasMensaje"
import SubirComprobante from "./pages/SubirComprobante";
import PaginaPagoTarjeta from "./pages/PaginaPagoTarjeta";
import Chatbot from './components/Chatbot/Chatbot';


function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog1" element={<Blog1 />} /> 
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/donacion-exitosa" element={<DonacionExitosa />} />
          <Route path="/gracias-mensaje" element={<GraciasMensaje />} />
          <Route path="/subir-comprobante" element={<SubirComprobante />} />
          <Route path="/paginapagotarjeta" element={<PaginaPagoTarjeta />} />
        </Routes>
      </main>
      <Footer />
       <Chatbot />
    </div>
    
  )
}

export default App