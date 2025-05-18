import { useState } from 'react'
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <Navbar expand="lg" className="py-3 bg-white shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">

          Banco de ALIMENTOS <small className="d-block">Quito</small>
        </Navbar.Brand>

        <Button
          variant="outline-warning"
          className="d-lg-none border-0"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
        </Button>

        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="mx-2">Inicio</Nav.Link>
            <Nav.Link href="#nosotros" className="mx-2">Nosotros</Nav.Link>
            <Nav.Link href="#impacto" className="mx-2">Impacto</Nav.Link>
            <Nav.Link href="#proceso" className="mx-2">Proceso</Nav.Link>
            <Nav.Link href="#contacto" className="mx-2">Contacto</Nav.Link>
            <Button 
              as={Link} 
              to="/donaciones" 
              variant="warning" 
              className="ms-3"
            >
              Donar ahora
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Offcanvas show={showMobileMenu} onHide={() => setShowMobileMenu(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={() => setShowMobileMenu(false)}>Inicio</Nav.Link>
            <Nav.Link href="#nosotros" onClick={() => setShowMobileMenu(false)}>Nosotros</Nav.Link>
            <Nav.Link href="#impacto" onClick={() => setShowMobileMenu(false)}>Impacto</Nav.Link>
            <Nav.Link href="#proceso" onClick={() => setShowMobileMenu(false)}>Proceso</Nav.Link>
            <Nav.Link href="#contacto" onClick={() => setShowMobileMenu(false)}>Contacto</Nav.Link>
            <Button 
              as={Link} 
              to="/donaciones" 
              variant="warning" 
              className="mt-3"
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