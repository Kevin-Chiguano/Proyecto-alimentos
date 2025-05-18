import * as XLSX from 'xlsx';

const EXCEL_FILE_PATH = '/respuestas.xlsx';

let cachedResponses = {};
let cachedOptions = [];

const loadExcelData = async () => {
  try {
    console.log('Iniciando carga de Excel...');
    const response = await fetch(EXCEL_FILE_PATH);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });
    
    console.log('Hojas del workbook:', workbook.SheetNames);
    
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log('Datos parseados del Excel:', jsonData);

    const responses = {};
    const options = [];

    jsonData.forEach((row, index) => {
      console.log(`Procesando fila ${index + 1}:`, row);
      
      if (!row.pregunta || !row.respuesta) {
        console.warn(`Fila ${index + 1} no tiene pregunta o respuesta`, row);
        return;
      }

      const pregunta = String(row.pregunta).toLowerCase().trim();
      const respuesta = String(row.respuesta).trim();
      
      responses[pregunta] = respuesta;
      
      // Verificación más robusta de es_opcion_rapida
      const esOpcionRapida = row.es_opcion_rapida === true || 
                            row.es_opcion_rapida === 'TRUE' || 
                            row.es_opcion_rapida === 'true' ||
                            row.es_opcion_rapida === 1 ||
                            String(row.es_opcion_rapida).toLowerCase() === 'true';
      
      if (esOpcionRapida) {
        console.log(`Agregando opción rápida: "${row.pregunta}"`);
        options.push(String(row.pregunta).trim());
      }
    });

    cachedResponses = responses;
    cachedOptions = options;
    
    console.log('Respuestas cargadas:', cachedResponses);
    console.log('Opciones rápidas cargadas:', cachedOptions);
    
  } catch (error) {
    console.error('Error al cargar el archivo Excel:', error);
    // Datos de respaldo basados en tu Excel
    cachedResponses = {
      "hola": "¡Hola! Bienvenido al Banco de Alimentos Quito. ¿En qué puedo ayudarte hoy?",
      "donar": "Puedes donar alimentos en nuestras instalaciones ubicadas en Av. Principal 123, Quito. Horario: Lunes a Viernes de 8:00 a 17:00.",
      "voluntario": "¡Nos encanta que quieras ser voluntario! Completa el formulario en nuestra página web o visítanos para más información.",
      "horario": "Nuestro horario de atención es de Lunes a Viernes de 8:00 a 17:00 y Sábados de 9:00 a 13:00.",
      "direccion": "Estamos ubicados en la Av. Principal 123, Quito. ¡Te esperamos!",
      "default": "Gracias por tu mensaje. Para más información puedes visitar nuestro sitio web o contactarnos al 02-123-4567."
    };
    cachedOptions = [
      "donar",
      "voluntario"
    ];
  }
};

// Cargar datos al iniciar
loadExcelData();

const simulateDelay = () => new Promise(resolve => setTimeout(resolve, 500));

export const getBotResponse = async (userMessage) => {
  await simulateDelay();
  const lowerMessage = userMessage.toLowerCase().trim();

  if (cachedResponses[lowerMessage]) {
    return cachedResponses[lowerMessage];
  }

  for (const [pregunta, respuesta] of Object.entries(cachedResponses)) {
    if (lowerMessage.includes(pregunta)) {
      return respuesta;
    }
  }

  return cachedResponses.default;
};

export const getQuickOptions = async () => {
  await simulateDelay();
  return cachedOptions;
};