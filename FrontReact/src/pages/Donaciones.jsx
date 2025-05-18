import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap'

const Donaciones = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h1 className="text-center mb-5">Realiza tu donación</h1>
            
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Monto</Form.Label>
                    <Form.Control 
                      type="number" 
                      placeholder="$" 
                      className="py-3 fs-4"
                    />
                  </Form.Group>

                  <div className="d-flex flex-wrap gap-3 mb-4">
                    {[5, 10, 50, 100].map((monto) => (
                      <Button 
                        key={monto}
                        variant="outline-warning" 
                        className="flex-grow-1 py-2"
                      >
                        ${monto}
                      </Button>
                    ))}
                  </div>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Método de pago</Form.Label>
                    <ListGroup>
                      <ListGroup.Item action className="py-3 fw-bold">
                        TARJETA DE CRÉDITO
                      </ListGroup.Item>
                      <ListGroup.Item action className="py-3 fw-bold">
                        TARJETA DÉBITO
                      </ListGroup.Item>
                      <ListGroup.Item action className="py-3">
                        PAYPAL
                      </ListGroup.Item>
                      <ListGroup.Item action className="py-3">
                        TRANSFERENCIA
                      </ListGroup.Item>
                    </ListGroup>
                  </Form.Group>

                  <Button variant="warning" size="lg" className="w-100 py-3">
                    Donar ahora
                  </Button>
                </Form>
              </Card.Body>
            </Card>

            <Row className="bg-light py-4 rounded text-center mt-5">
              <Col>
                <h3 className="text-warning">GRACIAS A TU AYUDA</h3>
                <h4 className="fw-bold">LOGRAMOS ESTOS RESULTADOS</h4>
                <p className="display-6 text-warning mt-3">+230,000 kilos</p>
                <p>de alimentos entregados mensualmente</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Donaciones