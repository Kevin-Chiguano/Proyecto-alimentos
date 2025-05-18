import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>BAQ.EC Clone</h5>
            <p>
              Ofrecemos soluciones digitales innovadoras para ayudar a tu negocio a crecer en el mundo digital.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Inicio</a></li>
              <li><a href="/about" className="text-white">Nosotros</a></li>
              <li><a href="/services" className="text-white">Servicios</a></li>
              <li><a href="/contact" className="text-white">Contacto</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contacto</h5>
            <address>
              <p>Guayaquil, Ecuador</p>
              <p>Email: info@baqecclone.com</p>
              <p>Teléfono: +593 123456789</p>
            </address>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} BAQ.EC Clone. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer