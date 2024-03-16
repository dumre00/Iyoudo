// Contact.js
import React from 'react';

function About() {
  return (
    <div>
      <h2 style={{ fontSize: '3em', color: 'blue' }}>Sobre Nosotros</h2>

        <h3 style={{ fontSize: '1.5em' }}>¿Quiénes somos?</h3>
        <section className="quienes-somos">

        <div className="quienes-somos">
          <p>En Iyoudo trabajamos para dar solución a uno de los problemas que cada vez más va en aumento, como es el caso de la soledad no deseada, especialmente en personas de tercera edad.</p>
          <p>Con Iyoudo puedes ayudar, ya sea dándote de alta como voluntario o creando una cuenta para aquellas personas que necesiten ayuda.</p>
        </div>
      </section>

      <section>
  <h3>Quiénes forman parte</h3>
  <div className="estudiantes">
    <div className="estudiante">
      <img src="ruta-a-la-imagen1.jpg" alt="Nombre 1" className="foto-estudiante" />
      <p><strong>Nombre 1</strong></p>
      <p>Ocupación 1</p>
    </div>
    <div className="estudiante">
      <img src="ruta-a-la-imagen2.jpg" alt="Nombre 2" className="foto-estudiante" />
      <p><strong>Nombre 2</strong></p>
      <p>Ocupación 2</p>
    </div>
    {/* Repite para los demás estudiantes */}
  </div>
</section>

      <section>
        <h3>Qué hacemos</h3>
        <p>Lanzamos esta web con el objetivo de facilitar a las personas con problemas o sentimientos de soledad no deseada.</p>
      </section>

      <section>
        <h3>Colaboración</h3>
        <div>
          <h4>Merchandising</h4>
          {/* Agrega aquí las fotos de las camisetas */}
          <p>Puedes adquirir nuestras camisetas para apoyar nuestra causa.</p>
          <button>Donar</button>
        </div>

        <div>
          <h4>Colaboradores</h4>
          {/* Agrega aquí las fotos de la universidad y las empresas colaboradoras */}
        </div>
      </section>

      <h3>Contacto</h3>
      <p>Dirección: 123 Calle Principal, Ciudad</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.31004657615!2d-74.04718554353497!3d40.71277604381348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a9f9b3f31f%3A0x102565466944d59!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1613752355212!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      <p>Correo electrónico: info@iyoudo.com</p>
      <p>Teléfono: +1 123-456-7890</p>


    <footer>
        <p>© 2024 Iyoudo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default About;
