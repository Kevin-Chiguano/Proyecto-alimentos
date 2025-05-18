import React from "react";
import { useNavigate } from "react-router-dom";
import "./GraciasMensaje.css";

const GraciasMensaje = () => {
  const navigate = useNavigate();

  return (
    <div className="gracias-mensaje-bg">
      <div className="gracias-mensaje-content">
        {/* Mensaje principal */}
        <div className="gracias-mensaje-textos">
          <h2 className="gracias-mensaje-titulo">
            ¡GRACIAS POR DAR EL PRIMER PASO!
          </h2>
          <p className="gracias-mensaje-descripcion">
            Te acabamos de enviar un mensaje. Estás más cerca de marcar una diferencia real.
          </p>
          <button
            className="gracias-mensaje-btn"
            onClick={() => navigate("/")}
          >
            VOLVER AL INICIO
          </button>
        </div>
        {/* Testimonio */}
        <div className="gracias-mensaje-testimonio">
          <div className="gracias-mensaje-img-wrap">
            <img
              src="https://live.staticflickr.com/65535/52213225525_82150c732a.jpg"
              alt="Representante de la empresa"
              className="gracias-mensaje-img"
            />
            <div className="gracias-mensaje-quote">
              <span className="gracias-mensaje-quote-mark">&ldquo;</span>
              Nuestra colaboración con el banco de alimentos es verdaderamente gratificante. Nos permite devolver a la comunidad y tener un impacto positivo en las vidas de las personas necesitadas.
              <br />
              <span className="gracias-mensaje-autor">
                Elena G., representante de la empresa
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Franja naranja */}
      <div className="gracias-mensaje-franja">
        Más de 41 toneladas de residuos orgánicos recicladas
      </div>
    </div>
  );
};

export default GraciasMensaje;