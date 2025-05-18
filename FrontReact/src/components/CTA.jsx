import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section id="contacto" className="py-5 bg-warning text-white">
      <Container className="text-center">
        <h2 className="fw-bold mb-4">¡Únete a nuestra causa!</h2>
        <p className="lead mb-4">
          Tu contribución marca la diferencia en la lucha contra el hambre
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button 
            as={Link}
            to="/donaciones"
            variant="light" 
            size="lg"
          >
            Donar ahora
          </Button>
          <Button variant="outline-light" size="lg">
            Ser voluntario
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default CTA