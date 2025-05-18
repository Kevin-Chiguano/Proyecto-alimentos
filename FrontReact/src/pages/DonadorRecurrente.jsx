import React from "react";
import { useNavigate } from "react-router-dom";
import "./DonadorRecurrente.css";

const DonadorRecurrente = () => {
  const navigate = useNavigate();

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    // Lógica para manejar archivos PDF
    console.log(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="donador-recurrente-bg">
      <div className="donador-recurrente-content">
        {/* Mensaje principal */}
        <div className="donador-recurrente-textos">
          <h2 className="donador-recurrente-titulo">
            ¡GRACIAS POR SER DONADOR RECURRENTE!
          </h2>
          <p className="donador-recurrente-descripcion">
            Tu compromiso ayuda a combatir el hambre de manera sostenible. Por favor completa el proceso:
          </p>

          {/* Sección PDF */}
          <div className="donador-pdf-section">
            <a 
              href="/formulario-donacion.pdf" 
              download 
              className="donador-pdf-link"
            >
              DESCARGAR FORMULARIO PDF
            </a>
            
            <div 
              className="donador-dropzone"
              onDrop={handleFileDrop}
              onDragOver={handleDragOver}
            >
              <p>Arrastra tu formulario completado aquí</p>
              <small>o haz clic para seleccionar archivo</small>
              <input 
                type="file" 
                accept=".pdf" 
                className="donador-file-input" 
              />
            </div>
          </div>

          <button
            className="donador-recurrente-btn"
            onClick={() => navigate("/")}
          >
            VOLVER AL INICIO
          </button>
        </div>

        {/* Testimonio */}
        <div className="donador-recurrente-testimonio">
          <div className="donador-recurrente-img-wrap">
            <img
              src="https://live.staticflickr.com/65535/52213225525_82150c732a.jpg"
              alt="Donador recurrente"
              className="donador-recurrente-img"
            />
            <div className="donador-recurrente-quote">
              <span className="donador-recurrente-quote-mark">&ldquo;</span>
              Ser donador recurrente me permite planificar mi ayuda y saber que mi contribución llega cada mes a quienes más lo necesitan.
              <br />
              <span className="donador-recurrente-autor">
                Carlos M., donador desde 2020
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Franja naranja */}
      <div className="donador-recurrente-franja">
        Más de 150 donadores recurrentes activos
      </div>
    </div>
  );
};

export default DonadorRecurrente;