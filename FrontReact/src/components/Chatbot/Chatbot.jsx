import { useState } from 'react';
import FloatingButton from './FloatingButton';
import ChatWindow from './ChatWindow';

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);
  //Visibilidad
  const handleButtonClick = () => {
    setShowChat(true); 
  };

  const handleChatClose = () => {
    setShowChat(false); 
  };

  return (
    <div className="baq-chatbot-container">
      <FloatingButton onClick={handleButtonClick} isVisible={!showChat} />
      <ChatWindow show={showChat} onHide={handleChatClose} />
    </div>
  );
};

export default Chatbot;