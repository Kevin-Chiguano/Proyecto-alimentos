import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section id="inicio" className="hero-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">¿QUIERES DONAR ALIMENTOS?</h1>
            <h2 className="h3 mb-3">¿QUIERES DONAR DINERO?</h2>
            <h2 className="h3 mb-4">¿QUIERES SER VOLUNTARIO?</h2>
            <div className="d-flex flex-wrap gap-3">
              <Button 
                as={Link}
                to="/donaciones"
                variant="warning" 
                size="lg" 
                className="text-white"
              >
                Donar ahora
              </Button>
              <Button variant="outline-warning" size="lg">Ser voluntario</Button>
            </div>
          </Col>
          <Col lg={6}>
            <img 
              src="https://img.europapress.es/fotoweb/fotonoticia_20161125191701_690.jpg" 
              alt="Banco de Alimentos" 
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection