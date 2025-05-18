import { Container, Row, Col, Card } from 'react-bootstrap'

const Impact = () => {
  const stats = [
    { value: '130,919,469', label: 'COMIDA', period: '(2003–2024)' },
    { value: '149', label: 'Organizaciones atendidas', period: '(2024)' },
    { value: '38,167,550', label: 'Kilos entregados', period: '(2003–2024)' },
    { value: '+82,973', label: 'Personas beneficiadas', period: '(C/Mes)' }
  ]

  return (
    <section id="impacto" className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-5">Impacto Alcanzado</h2>
        <Row className="g-4 text-center">
          {stats.map((stat, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="text-warning">{stat.value}</h3>
                  <p className="fw-bold">{stat.label}</p>
                  <small className="text-muted">{stat.period}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Impact