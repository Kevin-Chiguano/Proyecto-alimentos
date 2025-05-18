import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import baqImg from "../assets/baq-datos-transferencia.jpg.jpg"
import qrImg from "../assets/qr-deuna.jpg"
import "./SubirComprobante.css";


const FormularioTransferencia = ({
  form,
  handleChange,
  handleFileChange,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  dragActive,
  archivoNombre,
  fileInputRef,
  handleSubmit,
}) => (
  <form className="comprobante-form" onSubmit={handleSubmit}>
    <h2>Subir Comprobante de Transferencia</h2>
    <button
      type="button"
      className="deuna-switch-btn"
      onClick={form.onSwitchDeUna}
    >
      Pago con DeUna
    </button>
    <div className="comprobante-group">
      <label>Número de cédula:</label>
      <input
        type="text"
        name="cedula"
        value={form.cedula}
        onChange={handleChange}
        required
        maxLength={20}
        pattern="\d+"
        placeholder="Ej: 12345678"
      />
    </div>
    <div className="comprobante-group">
      <label>Número de comprobante:</label>
      <input
        type="text"
        name="comprobante"
        value={form.comprobante}
        onChange={handleChange}
        required
        maxLength={30}
        placeholder="Ej: 00012345"
      />
    </div>
    <div className="comprobante-group">
      <label>Monto de la transferencia:</label>
      <input
        type="number"
        name="monto"
        value={form.monto}
        onChange={handleChange}
        required
        min="0"
        step="0.01"
        placeholder="Ej: 10000.00"
      />
    </div>
    <div
      className={`comprobante-dropzone${dragActive ? " drag-active" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current && fileInputRef.current.click()}
    >
      <input
        type="file"
        accept=".pdf,image/png,image/jpeg,image/jpg"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <span>
        {archivoNombre
          ? `Archivo seleccionado: ${archivoNombre}`
          : "Arrastra aquí tu comprobante (PDF, PNG o JPG) o haz clic para seleccionar"}
      </span>
    </div>
    <button type="submit" className="comprobante-btn">
      Enviar Comprobante
    </button>
  </form>
);

const FormularioDeUna = ({
  comprobante,
  onSwitchTransfer,
  handleChange,
  handleFileChange,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  dragActive,
  archivoNombre,
  fileInputRef,
  handleSubmit,
}) => (
  <form className="comprobante-form" onSubmit={handleSubmit}>
    <h2>Pago con DeUna</h2>
    <button
      type="button"
      className="deuna-switch-btn"
      onClick={onSwitchTransfer}
    >
      Volver a Transferencia
    </button>
    <div className="qr-img-box">
      <img
        src={qrImg}
        alt="QR para pago con DeUna"
        className="qr-img-preview"
      />
    </div>
    <div className="comprobante-group">
      <label>Número de comprobante:</label>
      <input
        type="text"
        name="comprobante_deuna"
        value={comprobante}
        onChange={handleChange}
        required
        maxLength={30}
        placeholder="Ej: 00012345"
      />
    </div>
    <div
      className={`comprobante-dropzone${dragActive ? " drag-active" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current && fileInputRef.current.click()}
    >
      <input
        type="file"
        accept=".pdf,image/png,image/jpeg,image/jpg"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <span>
        {archivoNombre
          ? `Archivo seleccionado: ${archivoNombre}`
          : "Arrastra aquí tu comprobante (PDF, PNG o JPG) o haz clic para seleccionar"}
      </span>
    </div>
    <button type="submit" className="comprobante-btn">
      Confirmar Pago
    </button>
  </form>
);

const SubirComprobante = () => {
  const navigate = useNavigate();

  // Transferencia
  const [form, setForm] = useState({
    cedula: "",
    comprobante: "",
    monto: "",
  });
  const [dragActive, setDragActive] = useState(false);
  const [archivoNombre, setArchivoNombre] = useState("");
  const [archivo, setArchivo] = useState(null);
  const fileInputRef = useRef();

  // DeUna
  const [showDeUna, setShowDeUna] = useState(false);
  const [comprobanteDeUna, setComprobanteDeUna] = useState("");
  const [dragActiveDeUna, setDragActiveDeUna] = useState(false);
  const [archivoNombreDeUna, setArchivoNombreDeUna] = useState("");
  const [archivoDeUna, setArchivoDeUna] = useState(null);
  const fileInputRefDeUna = useRef();

  // Transferencia handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && validarArchivo(file)) {
      setArchivo(file);
      setArchivoNombre(file.name);
    } else {
      setArchivo(null);
      setArchivoNombre("");
      alert("Solo se permiten archivos PDF, PNG o JPG.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && validarArchivo(file)) {
      setArchivo(file);
      setArchivoNombre(file.name);
    } else {
      setArchivo(null);
      setArchivoNombre("");
      alert("Solo se permiten archivos PDF, PNG o JPG.");
    }
  };

  const validarArchivo = (file) => {
    const tiposPermitidos = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/jpg",
    ];
    return tiposPermitidos.includes(file.type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!archivo) {
      alert("Por favor, sube un archivo comprobante.");
      return;
    }
    // Aquí puedes hacer el envío, luego redirigir
    navigate("/donacion-exitosa");
  };

  // DeUna handlers
  const handleChangeDeUna = (e) => {
    setComprobanteDeUna(e.target.value);
  };

  const handleFileChangeDeUna = (e) => {
    const file = e.target.files[0];
    if (file && validarArchivo(file)) {
      setArchivoDeUna(file);
      setArchivoNombreDeUna(file.name);
    } else {
      setArchivoDeUna(null);
      setArchivoNombreDeUna("");
      alert("Solo se permiten archivos PDF, PNG o JPG.");
    }
  };

  const handleDragOverDeUna = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveDeUna(true);
  };

  const handleDragLeaveDeUna = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveDeUna(false);
  };

  const handleDropDeUna = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveDeUna(false);
    const file = e.dataTransfer.files[0];
    if (file && validarArchivo(file)) {
      setArchivoDeUna(file);
      setArchivoNombreDeUna(file.name);
    } else {
      setArchivoDeUna(null);
      setArchivoNombreDeUna("");
      alert("Solo se permiten archivos PDF, PNG o JPG.");
    }
  };

  const handleSubmitDeUna = (e) => {
    e.preventDefault();
    if (!archivoDeUna) {
      alert("Por favor, sube un archivo comprobante.");
      return;
    }
    // Aquí puedes hacer el envío, luego redirigir
    navigate("/donacion-exitosa");
  };

  // Switchers
  const onSwitchDeUna = () => setShowDeUna(true);
  const onSwitchTransfer = () => setShowDeUna(false);

  return (
    <div className="comprobante-bg">
      <div className="comprobante-contenido">
        <div className="comprobante-imagen-lado">
          <img
            src={baqImg}
            alt="Datos de transferencia Banco de Alimentos Quito"
          />
        </div>
        {showDeUna ? (
          <FormularioDeUna
            comprobante={comprobanteDeUna}
            onSwitchTransfer={onSwitchTransfer}
            handleChange={handleChangeDeUna}
            handleFileChange={handleFileChangeDeUna}
            handleDragOver={handleDragOverDeUna}
            handleDragLeave={handleDragLeaveDeUna}
            handleDrop={handleDropDeUna}
            dragActive={dragActiveDeUna}
            archivoNombre={archivoNombreDeUna}
            fileInputRef={fileInputRefDeUna}
            handleSubmit={handleSubmitDeUna}
          />
        ) : (
          <FormularioTransferencia
            form={{ ...form, onSwitchDeUna }}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
            dragActive={dragActive}
            archivoNombre={archivoNombre}
            fileInputRef={fileInputRef}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default SubirComprobante;