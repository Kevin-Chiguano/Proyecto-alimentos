import { useState } from 'react';
import FloatingButton from './FloatingButton';
import ChatWindow from './ChatWindow';

/**
 * Componente principal del chatbot
 */
const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);

  const handleButtonClick = () => {
    setShowChat(true); // Al hacer clic, siempre abre el chat y oculta el botón
  };

  const handleChatClose = () => {
    setShowChat(false); // Al cerrar, siempre cierra el chat y muestra el botón
  };

  return (
    <div className="baq-chatbot-container">
      <FloatingButton onClick={handleButtonClick} isVisible={!showChat} />
      <ChatWindow show={showChat} onHide={handleChatClose} />
    </div>
  );
};

export default Chatbot;