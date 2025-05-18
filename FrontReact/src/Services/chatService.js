// Datos quemados para pruebas
const hardcodedResponses = {
  "hola": "¡Hola! Bienvenido al Banco de Alimentos Quito. ¿En qué puedo ayudarte hoy?",
  "donar": "Puedes donar alimentos en nuestras instalaciones ubicadas en Av. Principal 123, Quito. Horario: Lunes a Viernes de 8:00 a 17:00.",
  "voluntario": "¡Nos encanta que quieras ser voluntario! Completa el formulario en nuestra página web o visítanos para más información.",
  "horario": "Nuestro horario de atención es de Lunes a Viernes de 8:00 a 17:00 y Sábados de 9:00 a 13:00.",
  "direccion": "Estamos ubicados en la Av. Principal 123, Quito. ¡Te esperamos!",
  "default": "Gracias por tu mensaje. Para más información puedes visitar nuestro sitio web o contactarnos al 02-123-4567."
};

const hardcodedOptions = [
  "¿Cómo puedo donar alimentos?",
  "Quiero ser voluntario",
  "¿Cuál es su horario de atención?",
  "¿Dónde están ubicados?"
];

// Simula un pequeño retraso como si fuera real
const simulateDelay = () => new Promise(resolve => setTimeout(resolve, 500));

export const getBotResponse = async (userMessage) => {
  await simulateDelay(); // Simula tiempo de respuesta
  
  const lowerMessage = userMessage.toLowerCase();
  
  // Busca coincidencias en los mensajes quemados
  if (lowerMessage.includes('hola')) return hardcodedResponses.hola;
  if (lowerMessage.includes('donar')) return hardcodedResponses.donar;
  if (lowerMessage.includes('voluntar')) return hardcodedResponses.voluntario;
  if (lowerMessage.includes('horario') || lowerMessage.includes('hora')) return hardcodedResponses.horario;
  if (lowerMessage.includes('ubic') || lowerMessage.includes('direccion')) return hardcodedResponses.direccion;
  
  return hardcodedResponses.default;
};

export const getQuickOptions = async () => {
  await simulateDelay(); // Simula tiempo de respuesta
  return hardcodedOptions;
};