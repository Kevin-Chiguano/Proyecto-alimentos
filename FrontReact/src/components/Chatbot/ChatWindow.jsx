import { useState, useEffect } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import { FiX, FiSend } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { getBotResponse, getQuickOptions } from '../../Services/chatService';

const ChatWindow = ({ show, onHide }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [quickOptions, setQuickOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    if (show) {
      const loadInitialData = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
          const [options] = await Promise.all([
            getQuickOptions(),
          ]);
          
          setQuickOptions(options);
          setMessages([{
            text: '¡Hola! Soy el asistente virtual del Banco de Alimentos Quito. ¿En qué puedo ayudarte hoy?',
            sender: 'bot',
            timestamp: new Date()
          }]);
        } catch (err) {
          console.error('Error loading chat data:', err);
          setError('Error al cargar el chat');
          setMessages([{
            text: '¡Hola! Estoy aquí para ayudarte. ¿En qué puedo asistirte hoy?',
            sender: 'bot',
            timestamp: new Date()
          }]);
        } finally {
          setIsLoading(false);
        }
      };

      loadInitialData();
    } else {
      // Resetear al cerrar
      setMessages([]);
      setQuickOptions([]);
      setError(null);
    }
  }, [show]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || isLoading) return;

    // Agregar mensaje del usuario
    const userMessage = {
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setError(null);

    // Obtener respuesta
    setIsLoading(true);
    try {
      const botResponse = await getBotResponse(newMessage);
      setMessages(prev => [...prev, {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
    } catch (err) {
      console.error('Error getting bot response:', err);
      setError('Error al obtener respuesta');
      setMessages(prev => [...prev, {
        text: 'Lo siento, ocurrió un error. Por favor intenta nuevamente.',
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickOptionSelect = async (option) => {
    const userMessage = {
      text: option,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setError(null);

    setIsLoading(true);
    try {
      const botResponse = await getBotResponse(option);
      setMessages(prev => [...prev, {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
    } catch (err) {
      console.error('Error getting bot response:', err);
      setError('Error al obtener respuesta');
      setMessages(prev => [...prev, {
        text: 'Lo siento, ocurrió un error. Por favor intenta nuevamente.',
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      backdrop={false}
      dialogClassName="modal-dialog-slideup"
      contentClassName="baq-chat-window"
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '30px',
        width: '350px',
        maxWidth: '90%',
        margin: 0,
        zIndex: 1050,
        fontFamily: "'Arial', sans-serif"
      }}
    >
      <Modal.Header className="baq-chat-header">
        <Modal.Title className="baq-chat-title">Asistente Virtual BAQ</Modal.Title>
        <Button 
          variant="link" 
          className="baq-close-button" 
          onClick={onHide}
          aria-label="Cerrar chat"
        >
          <FiX size={24} />
        </Button>
      </Modal.Header>
      
      <Modal.Body className="p-0" style={{ height: '400px' }}>
        <div className="d-flex flex-column h-100">
          {/* Área de mensajes */}
          <div className="baq-messages-container">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`baq-message-container ${msg.sender === 'user' ? 'user' : 'bot'}`}
              >
                <div className={`baq-message ${msg.sender === 'user' ? 'user' : 'bot'}`}>
                  {msg.text}
                  <div className="baq-message-time">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="baq-message-container bot">
                <div className="baq-message bot typing-indicator">
                  <Spinner animation="border" size="sm" role="status" />
                  <span className="ms-2">Escribiendo...</span>
                </div>
              </div>
            )}
            
            {error && (
              <div className="baq-error-message">
                {error}
              </div>
            )}
          </div>

          {/* Opciones rápidas */}
          {quickOptions.length > 0 && !isLoading && messages.length <= 1 && (
            <div className="baq-quick-options">
              <p className="baq-quick-options-title">Selecciona una opción:</p>
              <div className="baq-options-container">
                {quickOptions.map((option, index) => (
                  <Button 
                    key={index}
                    className="baq-option-button"
                    onClick={() => handleQuickOptionSelect(option)}
                    disabled={isLoading}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Formulario de mensaje */}
          <Form onSubmit={handleSendMessage} className="baq-input-form">
            <div className="baq-input-container">
              <Form.Control
                type="text"
                placeholder="Escribe tu mensaje..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="baq-input-field"
                disabled={isLoading}
                aria-label="Escribe tu mensaje"
              />
              <Button 
                className="baq-send-button"
                type="submit"
                disabled={!newMessage.trim() || isLoading}
                aria-label="Enviar mensaje"
              >
                {isLoading ? (
                  <Spinner animation="border" size="sm" role="status" />
                ) : (
                  <FiSend />
                )}
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

ChatWindow.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default ChatWindow;
