import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CTA.css'

const CTA = () => {
  return (
    <section id="contacto" className="cta-section">
      <Container className="text-center">
        <h2 className="cta-title">¡Únete a nuestra causa!</h2>
        <p className="cta-text">
          Tu contribución marca la diferencia en la lucha contra el hambre
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button 
            as={Link}
            to="/donaciones"
            className="cta-btn-primary"
            size="lg"
          >
            Donar ahora
          </Button>
          <Button 
            as={Link}
            to="/voluntariado"
            className="cta-btn-outline"
            size="lg"
          >
            Ser voluntario
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default CTA