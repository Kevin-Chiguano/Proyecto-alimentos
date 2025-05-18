import { Container, Row, Col, Card } from 'react-bootstrap'
import './Process.css'

const Process = () => {
  const steps = [
    {
      title: 'RESCATE DE ALIMENTO',
      description: 'Recuperación de alimentos aptos para el consumo que serían desperdiciados'
    },
    {
      title: 'CLASIFICACIÓN Y ALMACENAMIENTO',
      description: 'Procesamiento y almacenamiento bajo estándares de calidad'
    },
    {
      title: 'DISTRIBUCIÓN',
      description: 'Entrega eficiente a organizaciones sociales beneficiarias'
    },
    {
      title: 'TRAZABILIDAD',
      description: 'Sistema certificado de seguimiento y control'
    }
  ]

  return (
    <section id="proceso" className="py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold section-title">Nuestro Proceso</h2>
        <Row className="g-4">
          {steps.map((step, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="h-100 process-card">
                <Card.Body className="p-4">
                  <h4 className="process-title">{step.title}</h4>
                  <p className="process-description">{step.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Process