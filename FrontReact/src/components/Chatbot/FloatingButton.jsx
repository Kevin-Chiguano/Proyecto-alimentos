import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * Botón flotante del chatbot
 * @param {Object} props - Props del componente
 * @param {Function} props.onClick - Función al hacer clic
 * @param {boolean} props.isVisible - Controla la visibilidad del botón
 */
const FloatingButton = ({ onClick, isVisible }) => {
  return (
    <Button
      className="floating-button" 
      style={{
        display: isVisible ? 'flex' : 'none', 
      }}
      onClick={onClick}
    >
      <FiMessageSquare size={24} />
    </Button>
  );
};

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default FloatingButton;