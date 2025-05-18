import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DonadorRecurrente.css";

const DonadorRecurrente = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === "application/pdf") {
      setFile(files[0]);
    } else {
      alert("Por favor, sube solo archivos PDF");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Por favor, selecciona un archivo PDF");
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log("Archivo enviado:", file.name);
      setIsSubmitted(true);
      setFile(null);
    } else {
      alert("Por favor, sube un archivo PDF primero");
    }
  };

  return (
    <div className="donador-recurrente-bg">
      <div className="donador-recurrente-content">
        {/* Testimonio - Arriba en el lado derecho */}
        <div className="donador-recurrente-testimonio">
          <div className="donador-testimonio-content">
            <div className="donador-recurrente-quote">
              <span className="donador-recurrente-quote-mark">&ldquo;</span>
              Ser donador recurrente me permite planificar mi ayuda y saber que mi contribución llega cada mes a quienes más lo necesitan.
              <br />
              <span className="donador-recurrente-autor">
                Carlos M., donador desde 2020
              </span>
            </div>
            <div className="donador-img-container">
              <img
                src="https://live.staticflickr.com/65535/52212759248_aa84f7d71b_c.jpg"
                alt="Donador recurrente"
                className="donador-recurrente-img"
              />
            </div>
          </div>
        </div>

        {/* Contenido principal */}
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
            
            <form onSubmit={handleSubmit}>
              <div 
                className={`donador-dropzone ${isDragging ? "drag-active" : ""} ${file ? "file-selected" : ""}`}
                onDrop={handleFileDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onClick={() => document.querySelector('.donador-file-input').click()}
              >
                {file ? (
                  <p>{file.name}</p>
                ) : (
                  <>
                    <p>Arrastra tu formulario completado aquí</p>
                    <small>o haz clic para seleccionar archivo</small>
                  </>
                )}
                <input 
                  type="file" 
                  accept=".pdf" 
                  className="donador-file-input" 
                  onChange={handleFileChange}
                />
              </div>
              
              <button
                type="submit"
                className="donador-submit-btn"
                disabled={!file}
              >
                ENVIAR FORMULARIO
              </button>
            </form>
            
            {isSubmitted && (
              <div className="donador-success-message">
                ¡Gracias! Hemos recibido tu formulario correctamente.
              </div>
            )}
          </div>

          <button
            className="donador-recurrente-btn"
            onClick={() => navigate("/")}
          >
            VOLVER AL INICIO
          </button>
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