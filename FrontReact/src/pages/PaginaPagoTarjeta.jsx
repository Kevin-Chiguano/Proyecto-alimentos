import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaginaPagoTarjeta.css'; // Usaremos el mismo CSS con pequeños ajustes

const PaginaPagoTarjeta = () => {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Formatear número de tarjeta con espacios cada 4 dígitos
    if (name === 'cardNumber') {
      const formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setCardData(prev => ({ ...prev, [name]: formattedValue }));
      return;
    }
    
    // Formatear fecha de expiración con /
    if (name === 'expiry' && value.length === 2 && !cardData.expiry.includes('/')) {
      setCardData(prev => ({ ...prev, [name]: value + '/' }));
      return;
    }
    
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simular procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Redirigir después de 2 segundos
      setTimeout(() => {
        navigate('/donacion-exitosa');
      }, 2000);
    }, 2000);
  };

  return (
    <div className="pago-tarjeta-bg">
      <div className="pago-tarjeta-content">
        {/* Contenido principal */}
        <div className="pago-tarjeta-form-container">
          <h2 className="pago-tarjeta-titulo">
            COMPLETA TU PAGO
          </h2>
          <p className="pago-tarjeta-descripcion">
            Por favor ingresa los datos de tu tarjeta de crédito para procesar tu donación.
          </p>

          <form onSubmit={handleSubmit} className="credit-card-form">
            <div className="form-group">
              <label>Número de tarjeta</label>
              <input
                type="text"
                name="cardNumber"
                value={cardData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
                pattern="[\d ]{16,19}"
              />
            </div>

            <div className="form-group">
              <label>Nombre en la tarjeta</label>
              <input
                type="text"
                name="cardName"
                value={cardData.cardName}
                onChange={handleInputChange}
                placeholder="Como aparece en la tarjeta"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Fecha de expiración (MM/AA)</label>
                <input
                  type="text"
                  name="expiry"
                  value={cardData.expiry}
                  onChange={handleInputChange}
                  placeholder="MM/AA"
                  maxLength="5"
                  required
                  pattern="\d{2}/\d{2}"
                />
              </div>

              <div className="form-group">
                <label>CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={cardData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="3"
                  required
                  pattern="\d{3}"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Monto de donación</label>
              <select className="donation-amount-select" required>
                <option value="">Selecciona un monto</option>
                <option value="100">$100 MXN</option>
                <option value="200">$200 MXN</option>
                <option value="500">$500 MXN</option>
                <option value="1000">$1,000 MXN</option>
                <option value="other">Otro monto</option>
              </select>
            </div>

            <button
              type="submit"
              className="pago-tarjeta-submit-btn"
              disabled={isProcessing || isSuccess}
            >
              {isProcessing ? 'PROCESANDO PAGO...' : isSuccess ? 'PAGO EXITOSO' : 'CONFIRMAR PAGO'}
            </button>

            {isSuccess && (
              <div className="pago-tarjeta-success-message">
                Redirigiendo a la página de confirmación...
              </div>
            )}
          </form>
        </div>

        {/* Sección de imagen con texto superpuesto */}
        <div className="pago-tarjeta-image-section">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Donación con tarjeta"
              className="pago-tarjeta-image"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>TU SEGURIDAD ES IMPORTANTE</h3>
                <p>
                  Todos los pagos son procesados de forma segura mediante encriptación SSL de 256-bit.
                </p>
                <div className="payment-methods">
                  <i className="fab fa-cc-visa"></i>
                  <i className="fab fa-cc-mastercard"></i>
                  <i className="fab fa-cc-amex"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Franja naranja */}
      <div className="pago-tarjeta-franja">
        Transacciones 100% seguras - Protección de datos garantizada
      </div>
    </div>
  );
};

export default PaginaPagoTarjeta;