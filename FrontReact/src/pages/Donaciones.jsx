import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Donaciones.css';

const Donaciones = () => {
  const [monto, setMonto] = useState('$');
  const [metodoPago, setMetodoPago] = useState('');

  const navigate = useNavigate();

  const handleMontoChange = (e) => {
    let valor = e.target.value;

    // Si no empieza con $, lo añadimos
    if (!valor.startsWith('$')) {
      valor = '$' + valor.replace(/[^0-9]/g, '');
    } else {
      // Solo permitimos números después del $
      valor = '$' + valor.slice(1).replace(/[^0-9]/g, '');
    }

    setMonto(valor);
  };

  const seleccionarMonto = (valor) => {
    setMonto(`$${valor}`);
  };

  const handleMetodoPagoChange = (e) => {
    setMetodoPago(e.target.value);
  };

  return (
    <div className="container py-5 donation-container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h1 className="text-center title">Realiza tu donación</h1>

          <div className="form-container mt-4">
            <label htmlFor="monto" className="form-label label">
              Monto
            </label>
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
                  value="TARJETA DE CRÉDITO"
                  onClick={handleMetodoPagoChange}
                  className={`payment-btn form-control ${metodoPago === 'TARJETA DE CRÉDITO' ? 'selected' : ''}`}
                >
                  TARJETA DE CRÉDITO
                </button>
              </div>
              <div className="col-6">
                <button
                  value="TARJETA DÉBITO"
                  onClick={handleMetodoPagoChange}
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