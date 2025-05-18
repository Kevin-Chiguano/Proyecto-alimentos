import React, { useState, useEffect } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FloatingButton = ({ onClick, isVisible }) => {
  const [showNotification, setShowNotification] = useState(true);
  const [userClicked, setUserClicked] = useState(false);

  useEffect(() => {
    if (userClicked) return; // No hacer nada si el usuario ya hizo clic

    const showDuration = 5000; // 5 segundos visible
    const hideDuration = 4000; // 4 segundos oculta

    const showNotification = () => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        setTimeout(hideNotification, hideDuration);
      }, showDuration);
    };

    const hideNotification = () => {
      setShowNotification(false);
      setTimeout(showNotification, hideDuration);
    };

    // Iniciar el ciclo
    const timer = setTimeout(() => {
      setShowNotification(false);
      setTimeout(hideNotification, hideDuration);
    }, showDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [userClicked]);

  const handleClick = () => {
    setUserClicked(true);
    setShowNotification(false);
    onClick();
  };

  return (
    <div className="floating-button-container">
      {showNotification && (
        <div className="help-notification">
          <span>¡Quiero ayudar!</span>
          <div className="notification-arrow"></div>
        </div>
      )}
      <Button
        className="floating-button"
        style={{
          display: isVisible ? 'flex' : 'none',
        }}
        onClick={handleClick}
      >
        <FiMessageSquare size={24} />
      </Button>
    </div>
  );
};

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default FloatingButton;