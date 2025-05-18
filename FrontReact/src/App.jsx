import { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.text())
      .then(data => setMensaje(data))
      .catch(err => console.error('Error al conectar con el backend:', err));
  }, []);

  return (
    <div>
      
      <p>Respuesta del backend: {mensaje}</p>
    </div>
  );
}

export default App;
