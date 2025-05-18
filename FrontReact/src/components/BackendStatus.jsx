import { useEffect, useState } from 'react';

const BackendStatus = () => {
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/mensaje')
      .then(res => res.json())
      .then(data => {
        setMensaje(data.mensaje);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setMensaje('No se pudo conectar con el backend');
        setLoading(false);
      });
  }, []);

  return (
    <div className="backend-status">
      {loading ? (
        <p>Verificando conexión con el servidor...</p>
      ) : (
        <p>Estado del backend: {mensaje}</p>
      )}
    </div>
  );
};

export default BackendStatus;