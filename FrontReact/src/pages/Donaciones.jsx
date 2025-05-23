import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Donaciones.css';

const Donaciones = () => {
  const [monto, setMonto] = useState('$');
  const [metodoPago, setMetodoPago] = useState('');

  const navigate = useNavigate();

  const handleMontoChange = (e) => {
    let valor = e.target.value;

    if (!valor.startsWith('$')) {
      valor = '$' + valor.replace(/[^0-9]/g, '');
    } else {
      valor = '$' + valor.slice(1).replace(/[^0-9]/g, '');
    }

    setMonto(valor);
  };

  const seleccionarMonto = (valor) => {
    setMonto(`$${valor}`);
  };

  // Redirecciona a PaginaPagoTarjeta.jsx para CRÉDITO y DÉBITO
  const handleMetodoPagoTarjeta = (tipo) => {
    setMetodoPago(tipo);
    navigate("/paginapagotarjeta");
  };

  const handleMetodoPagoChange = (e) => {
    setMetodoPago(e.target.value);
  };

  return (
    <div className="container py-5 donation-container">
      <div className="row align-items-center justify-content-center">
        {/* Imagen con texto encima */}
        <div className="col-12 col-md-4 text-center order-1 order-md-0 mb-4 mb-md-0 position-relative">
          <img
            src="https://live.staticflickr.com/65535/52212750458_4ffd5a939e.jpg"
            alt="Donación"
            className="img-fluid rounded shadow-image"
          />

          {/* Texto sobre la imagen */}
          <div className="overlay-text">
            <p className="mb-0">
              Cada día, muchas personas necesitan alimentos. Con tu donación, puedes marcar la diferencia en sus vidas.
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div className="col-12 col-md-6 order-0 order-md-1">
          <h1 className="text-center title">Realiza tu donación</h1>

          <div className="form-container mt-4">
            <label htmlFor="monto" className="form-label label">Monto</label>
            <input
              type="text"
              id="monto"
              placeholder="$"
              value={monto}
              onChange={handleMontoChange}
              className="form-control input-monto"
            />

            <div className="predefined-amounts d-flex justify-content-center flex-wrap gap-3 my-3">
              <button onClick={() => seleccionarMonto('5')} className="circle-btn">$5</button>
              <button onClick={() => seleccionarMonto('10')} className="circle-btn">$10</button>
              <button onClick={() => seleccionarMonto('50')} className="circle-btn">$50</button>
              <button onClick={() => seleccionarMonto('100')} className="circle-btn">$100</button>
            </div>

            <label className="form-label label text-center w-100 d-block mt-4">
              Selecciona el Método de pago
            </label>

            <div className="payment-method-grid row g-3 mt-2">
              <div className="col-6">
                <button
                  type="button"
                  value="TARJETA DE CRÉDITO"
                  onClick={() => handleMetodoPagoTarjeta('TARJETA DE CRÉDITO')}
                  className={`payment-btn form-control ${metodoPago === 'TARJETA DE CRÉDITO' ? 'selected' : ''}`}
                >
                  TARJETA DE CRÉDITO
                </button>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  value="TARJETA DÉBITO"
                  onClick={() => handleMetodoPagoTarjeta('TARJETA DÉBITO')}
                  className={`payment-btn form-control ${metodoPago === 'TARJETA DÉBITO' ? 'selected' : ''}`}
                >
                  TARJETA DÉBITO
                </button>
              </div>
              <div className="col-6">
                <button
                  value="PAYPAL"
                  onClick={handleMetodoPagoChange}
                  className={`payment-btn form-control ${metodoPago === 'PAYPAL' ? 'selected' : ''}`}
                >
                  PAYPAL
                </button>
              </div>
              <div className="col-6">
                <button 
                  onClick={() => navigate("/subir-comprobante")}
                  className={`payment-btn form-control ${metodoPago === 'TRANSFERENCIA' ? 'selected' : ''}`}>
                  TRANSFERENCIA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donaciones;