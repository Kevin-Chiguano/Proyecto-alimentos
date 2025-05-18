import { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/mensaje')
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
      .catch(err => console.error('Error al conectar con el backend:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Frontend con React + Vite</h1>
      <h2>Mensaje del backend:</h2>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
