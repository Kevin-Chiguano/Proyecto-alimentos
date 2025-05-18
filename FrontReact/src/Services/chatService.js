import * as XLSX from 'xlsx';

// Ruta relativa al archivo Excel en la carpeta public
const EXCEL_FILE_PATH = '/preguntas_respuestas.xlsx'; // Asegúrate que el nombre del archivo coincida

let cachedResponses = {};
let cachedOptions = [];

// Función para cargar datos desde Excel
const loadExcelData = async () => {
  try {
    const response = await fetch(EXCEL_FILE_PATH);
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });
    
    // Suponiendo que la primera hoja tiene las preguntas/respuestas
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Procesar los datos del Excel
    const responses = {};
    const options = new Set();

    jsonData.forEach(row => {
      const pregunta = row.pregunta?.toLowerCase().trim();
      const respuesta = row.respuesta?.trim();
      
      if (pregunta && respuesta) {
        responses[pregunta] = respuesta;
        // Agregar preguntas principales como opciones rápidas
        if (row.es_opcion_rapida) {
          options.add(row.pregunta);
        }
      }
    });

    cachedResponses = responses;
    cachedOptions = Array.from(options);
    
  } catch (error) {
    console.error('Error al cargar el archivo Excel:', error);
    // Datos de respaldo en caso de error
    cachedResponses = {
      "hola": "¡Hola! Bienvenido al Banco de Alimentos Quito. ¿En qué puedo ayudarte hoy?",
      "donar": "Puedes donar alimentos en nuestras instalaciones ubicadas en Av. Principal 123, Quito. Horario: Lunes a Viernes de 8:00 a 17:00.",
      "voluntario": "¡Nos encanta que quieras ser voluntario! Completa el formulario en nuestra página web o visítanos para más información.",
      "horario": "Nuestro horario de atención es de Lunes a Viernes de 8:00 a 17:00 y Sábados de 9:00 a 13:00.",
      "direccion": "Estamos ubicados en la Av. Principal 123, Quito. ¡Te esperamos!",
      "default": "Gracias por tu mensaje. Para más información puedes visitar nuestro sitio web o contactarnos al 02-123-4567."
    };
    cachedOptions = [
      "¿Cómo puedo donar alimentos?",
      "Quiero ser voluntario",
      "¿Cuál es su horario de atención?",
      "¿Dónde están ubicados?"
    ];
  }
};

// Cargar datos al iniciar
loadExcelData();

const simulateDelay = () => new Promise(resolve => setTimeout(resolve, 500));

export const getBotResponse = async (userMessage) => {
  await simulateDelay();
  const lowerMessage = userMessage.toLowerCase();

  // Buscar coincidencia exacta primero
  if (cachedResponses[lowerMessage]) {
    return cachedResponses[lowerMessage];
  }

  // Buscar por palabras clave
  for (const [pregunta, respuesta] of Object.entries(cachedResponses)) {
    if (lowerMessage.includes(pregunta.toLowerCase())) {
      return respuesta;
    }
  }

  return cachedResponses.default || "Gracias por tu mensaje. Para más información puedes visitar nuestro sitio web.";
};

export const getQuickOptions = async () => {
  await simulateDelay();
  return cachedOptions;
};