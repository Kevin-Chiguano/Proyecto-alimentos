import React, { useState } from "react";
import "./DonacionExitosa.css";

const DonacionExitosa = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="donacion-exitosa-bg">
      <div className="donacion-exitosa-content">
        {/* Testimonio */}
        <div className="donacion-exitosa-testimonio">
          <div className="donacion-exitosa-img-wrap">
            <img
              src="https://img.freepik.com/foto-gratis/vista-frontal-hombre-sonriente-posando-cv_23-2149927614.jpg?semt=ais_hybrid&w=740"
              alt="Beneficiario"
              className="donacion-exitosa-img"
            />
            <div className="donacion-exitosa-texto-img">
              <span>
                Este banco de alimentos ha sido un salvavidas para mi familia. No solo nos proporciona la comida que necesitamos, sino también un sentido de esperanza y comunidad. Estoy muy agradecido por la ayuda.
              </span>
              <br />
              <span className="donacion-exitosa-nombre">
                Juan L., beneficiario
              </span>
            </div>
          </div>
        </div>
        {/* Mensaje y formulario */}
        <div className="donacion-exitosa-mensaje-form">
          <h2>¡TU DONACION SE REALIZO CON EXITO!</h2>
          <h3>MUCHAS GRACIAS</h3>
          <p className="donacion-exitosa-p">
            ¿Quieres saber cómo ayudamos cada día? Déjanos tu correo y te contamos.
          </p>
          {submitted ? (
            <div className="donacion-exitosa-confirm">
              ¡Gracias! Pronto recibirás noticias sobre nuestro impacto.
            </div>
          ) : (
            <form className="donacion-exitosa-form" onSubmit={handleSubmit}>
              <label htmlFor="email" className="donacion-exitosa-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="donacion-exitosa-input"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="donacion-exitosa-btn">
                SÍ, QUIERO SABER MÁS
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Franja naranja informativa */}
      <div className="donacion-exitosa-franja">
        Más de 330 toneladas de comida rescatada en 2023
      </div>
    </div>
  );
};

export default DonacionExitosa;