import { useState } from 'react'
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <Navbar expand="lg" className="py-3 bg-white shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          Banco de ALIMENTOS <small className="d-block">Quito</small>
        </Navbar.Brand>

        <Button
          variant="outline"
          className="d-lg-none border-2 custom-outline-warning"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
        </Button>

        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="mx-2 nav-link-custom">Inicio</Nav.Link>
            <Nav.Link href="#nosotros" className="mx-2 nav-link-custom">Nosotros</Nav.Link>
            <Nav.Link href="#impacto" className="mx-2 nav-link-custom">Impacto</Nav.Link>
            <Nav.Link href="#proceso" className="mx-2 nav-link-custom">Proceso</Nav.Link>
            <Nav.Link href="#contacto" className="mx-2 nav-link-custom">Contacto</Nav.Link>
            <Button 
              as={Link} 
              to="/donaciones" 
              className="ms-3 custom-warning"
            >
              Donar ahora
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Offcanvas show={showMobileMenu} onHide={() => setShowMobileMenu(false)} placement="end">
        <Offcanvas.Header closeButton className="offcanvas-close-custom">
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-2">
            <Nav.Link as={Link} to="/" onClick={() => setShowMobileMenu(false)} className="nav-link-custom">Inicio</Nav.Link>
            <Nav.Link href="#nosotros" onClick={() => setShowMobileMenu(false)} className="nav-link-custom">Nosotros</Nav.Link>
            <Nav.Link href="#impacto" onClick={() => setShowMobileMenu(false)} className="nav-link-custom">Impacto</Nav.Link>
            <Nav.Link href="#proceso" onClick={() => setShowMobileMenu(false)} className="nav-link-custom">Proceso</Nav.Link>
            <Nav.Link href="#contacto" onClick={() => setShowMobileMenu(false)} className="nav-link-custom">Contacto</Nav.Link>
            <Button 
              as={Link} 
              to="/donaciones" 
              className="mt-3 custom-warning"
              onClick={() => setShowMobileMenu(false)}
            >
              Donar ahora
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  )
}

export default Header