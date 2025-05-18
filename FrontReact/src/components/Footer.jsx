import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css' // Importar el CSS

const Footer = () => {
  return (
    <footer className="footer-naranja">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="footer-titulo">BAQ.EC Clone</h5>
            <p className="footer-texto">
              Ofrecemos soluciones digitales innovadoras para ayudar a tu negocio 
              a crecer en el mundo digital.
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="footer-titulo">Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-enlace">Inicio</a></li>
              <li><a href="/about" className="footer-enlace">Nosotros</a></li>
              <li><a href="/services" className="footer-enlace">Servicios</a></li>
              <li><a href="/contact" className="footer-enlace">Contacto</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="footer-titulo">Contacto</h5>
            <div className="footer-contacto">
              <p className="footer-texto">Guayaquil, Ecuador</p>
              <p className="footer-texto">Email: info@baqecclone.com</p>
              <p className="footer-texto">Teléfono: +593 123456789</p>
            </div>
          </Col>
        </Row>

        <hr className="footer-divisor" />

        <Row>
          <Col className="text-center">
            <p className="footer-texto mb-0">
              &copy; {new Date().getFullYear()} BAQ.EC Clone. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer