import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section id="inicio" className="hero-section-custom">
      <Container className="hero-content text-center">
        <div className="hero-buttons">
          <Button as={Link} to="/donaciones" size="lg" className="hero-custom-btn shadow-button">
            DONAR ALIMENTOS
          </Button>
          <Button as={Link} to="/donaciones" size="lg" className="hero-custom-btn shadow-button">
            DONAR DINERO
          </Button>
          <Button as={Link} to="/donaciones" size="lg" className="hero-custom-btn shadow-button">
            SER VOLUNTARIO
          </Button>
        </div>
      </Container>

      <div className="hero-footer">
        <h3>¡DONAR ES IGUAL A INVERTIR EN UN ECUADOR SIN HAMBRE, ÚNETE!</h3>
        <p>
          El sistema de gestión BAQ es integral y la participación de otros actores es indispensable, 
          la empresa privada de alimentos y no alimentos, organizaciones sociales, instituciones educativas, 
          organismos internacionales, empresa pública, colectivos y voluntarios.
        </p>
        <p>
          Sé el puente entre la abundancia y la carencia de alimentos.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
