import React from 'react';
import './Blog1.css'; // Importamos los estilos personalizados

const Blog1 = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-title">
        <span className="blog-title-left">Un gesto pequeño. Un impacto enorme</span>
      </h1>
      <div className="content-container">
        <div className="text-section">
          <p>
            El Banco de Alimentos Quito, desde el 2022, trabaja incansablemente en evitar el desperdicio de alimento en la capital, brindando soluciones integrales para combatir el hambre y redistribuyendo el alimento a personas de escasos recursos económicos.
          </p>
          <p>
            Ecuador ocupa el segundo lugar en desnutrición infantil en Latinoamérica; el 14,7% vive en condiciones de extrema pobreza y paradójicamente cada año se desperdician más de 900 mil toneladas de alimento.
          </p>
          <p>
            Donar al Banco de Alimentos Quito es apostar por un Ecuador con menos hambre, tu donación se traduce en más de 2 millones de kilos de alimento entregado a más de 85 mil beneficiarios por mes; que significan más de 6 millones de platos de comida.
          </p>
          <h3>¿Cómo donar?</h3>
          <p>
            El Banco de Alimentos Quito compra y recolecta alimento de diferentes donantes, lo clasifica y almacena en un área con capacidad para 300 toneladas en abasto y 380 m3 de cámaras de frío y congelación con la ayuda de más de 700 voluntarios por mes, entregando alimento a más de 80 organizaciones sociales legalmente constituidas.
          </p>
          <ul>
            <li><a href="#donar-alimentos " target="_blank" rel="noopener noreferrer">Donar Alimentos</a></li>
            <li><a href="#donar-dinero" target="_blank" rel="noopener noreferrer">Donar Dinero</a></li>
            <li><a href="#voluntariado" target="_blank" rel="noopener noreferrer">Voluntariado</a></li>
          </ul>
          <p>
            Ayúdanos a combatir el hambre en Ecuador. Donar no es caridad, es responsabilidad.
          </p>
        </div>
        <div className="image-section">
          <img src="https://live.staticflickr.com/65535/52212750073_538a12d057_z.jpg" alt="Voluntarios distribuyendo alimentos" className="blog-image" />
        </div>
      </div>
    </div>
  );
};

export default Blog1;