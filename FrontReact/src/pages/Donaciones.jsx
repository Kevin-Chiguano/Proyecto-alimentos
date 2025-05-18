import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Donaciones.css';

const DONACION_SUGERIDA = [5, 10, 50, 100];

const Donaciones = () => {
  const [monto, setMonto] = useState("");
  const [metodo, setMetodo] = useState("");
  const navigate = useNavigate();

  const handleMontoClick = (valor) => {
    setMonto(valor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/donacion-exitosa");
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center text-orange">Realiza tu donación</h1>
      <form className="mx-auto p-4 rounded shadow bg-white" style={{maxWidth: 500}} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="monto">
            Monto
          </label>
          <input
            id="monto"
            className="form-control"
            type="number"
            placeholder="$"
            min={1}
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>
        <div className="mb-4 d-flex gap-2 flex-wrap">
          {DONACION_SUGERIDA.map((valor) => (
            <button
              type="button"
              key={valor}
              className={`btn btn-outline-orange${parseInt(monto) === valor ? " active" : ""}`}
              onClick={() => handleMontoClick(valor)}
            >
              ${valor}
            </button>
          ))}
        </div>
        <div className="mb-3">
          <label className="form-label">Método de pago</label>
          <div className="d-flex gap-2 flex-wrap">
            <button
              type="button"
              className={`btn btn-outline-secondary${metodo === "credito" ? " active" : ""}`}
              onClick={() => setMetodo("credito")}
            >
              TARJETA DE CRÉDITO
            </button>
            <button
              type="button"
              className={`btn btn-outline-secondary${metodo === "debito" ? " active" : ""}`}
              onClick={() => setMetodo("debito")}
            >
              TARJETA DÉBITO
            </button>
            <button
              type="button"
              className={`btn btn-outline-secondary${metodo === "paypal" ? " active" : ""}`}
              onClick={() => setMetodo("paypal")}
            >
              PAYPAL
            </button>
            <button
              type="button"
              className={`btn btn-outline-secondary${metodo === "transferencia" ? " active" : ""}`}
              onClick={() => setMetodo("transferencia")}
            >
              TRANSFERENCIA
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-orange w-100"
        >
          Donar ahora
        </button>
      </form>
    </div>
  );
};

export default Donaciones;