import { Container, Row, Col } from 'react-bootstrap'

const Mission = () => {
  return (
    <section id="nosotros" className="py-5 bg-white">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="fw-bold mb-4">¿Qué hace el Banco de Alimentos Quito?</h2>
            <p className="lead">
              Luchamos contra el hambre y la desnutrición rescatando alimentos 
              y distribuyéndolos a personas vulnerables mediante un sistema de gestión 
              certificado que garantiza trazabilidad y responsabilidad social empresarial.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Mission