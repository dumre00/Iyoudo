import React from 'react';

function About() {

  // Handler function for the "Donar" button
  const handleDonarButtonClick = () => {
    window.location.href = 'https://www.paypal.com/es/home';
  };

  return (
    <div>
      <h2 style={{ color: 'navy' }}>Sobre Nosotros</h2>

      <section>
        <p>Somos cinco estudiantes que hemos lanzado esta campaña para conectar generaciones y hacer posible una mejor convivencia.</p>
      </section>

      <section>
        <h3>¿Qué hacemos?</h3>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}> {/* Neuer Container mit begrenzter Breite und horizontal zentriertem Inhalt */}
          <p>
            Somos un equipo de estudiantes que ha creado una plataforma web para ayudar a personas mayores y con discapacidad. Destacamos por nuestra diversidad de habilidades y hemos trabajado juntos para crear una experiencia digital inclusiva y accesible, abordando desafíos de diseño, usabilidad y contenido para adaptarnos a las necesidades de nuestro público.</p>
        </div>      </section>

      <section>
        <h3>¿Quiénes forman parte?</h3>
        <div className="estudiantes" style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Primera sección con tres personas */}
          <div style={{ display: 'flex', marginRight: '10px' }}>
            <div className="estudiante" style={{ marginRight: '10px' }}>
              <a href="https://www.linkedin.com/in/adrian-patiño-ojeda">
                <img src="adrian.jpeg" alt="Adrian Patiño Ojeda" className="foto-estudiante" style={{ height: '200px', width: '200px', borderRadius: '50%' }} />
                <p><strong>Adrian Patiño Ojeda</strong></p>
              </a>
              <p>Estudiante 
                <p> </p>Ingeniería Informática</p>
            </div>
            <div className="estudiante" style={{ marginRight: '10px' }}>
              <a href="https://www.linkedin.com/in/alvaro-herrera-sapaico-24791117a/">
                <img src="Alavaro.jpeg" alt="Alvaro Herrera Sapaico" className="foto-estudiante" style={{ height: '200px', width: '200px', borderRadius: '50%' }} />
                <p><strong>Alvaro Herrera Sapaico</strong></p>
              </a>
              <p>Estudiante <br /> Ingeniería Informática</p>
            </div>
            <div className="estudiante" style={{ marginRight: '10px' }}>
              <a href="https://www.linkedin.com/in/daniel-birnstengel/">
                <img src="dani.jpg" alt="Daniel Birnstengel" className="foto-estudiante" style={{ height: '200px', width: '200px', borderRadius: '50%' }} />
                <p><strong>Daniel Birnstengel</strong></p>
              </a>
               <p>Ingeniero <br /> Telecomunicaciones</p>
          
            </div>
          </div>
        </div>
        <div className="estudiantes" style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Segunda sección con dos personas */}
          <div style={{ display: 'flex', marginRight: '10px' }}>
            <div className="estudiante" style={{ marginRight: '10px' }}>
              <a href="https://www.linkedin.com/in/gdum/">
                <img src="goks3.jpg" alt="Gokhan Durmus" className="foto-estudiante" style={{ height: '200px', width: '200px', borderRadius: '50%' }} />
                <p><strong>Gokarna Dumre</strong></p>
              </a>
              <p>Ingeniero Telecomunicaciones  <br />  & Desarollador de software</p>
            </div>
            <div className="estudiante" style={{ marginRight: '10px' }}>
              <a href="https://www.linkedin.com/in/joan-vila-orus-a82840278/">
                <img src="FOTO_cara.jpeg" alt="Joan Vila Orus" className="foto-estudiante" style={{ height: '200px', width: '200px', borderRadius: '50%' }} />
                <p><strong>Joan Vila Orus</strong></p>
              </a>
              <p>Estudiante <br /> Ingeniería Informática</p>
            </div>
          </div>
        </div>
      </section>





      <section>
        <h3>¿Cómo puede ayudarnos?</h3>
        <div>
          <div>
            <img src="/Shirt1.jpg" alt="Shirt1" style={{ height: '300px', width: 'auto' }} />
            <img src="/Shirt2.jpg" alt="Shirt2" style={{ height: '300px', width: 'auto' }} />
          </div>
          <p>Puedes adquirir nuestras camisetas para apoyar nuestra causa. Póngase en contacto con nosotros para más información.</p>
          <button onClick={handleDonarButtonClick} style={{ backgroundColor: 'navy', color: 'white', padding: '10px 20px', fontSize: '1.2rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Donar</button>
        </div>
      </section>


      <section style={{ marginBottom: '20px' }}>
          <h2>Colaboraciónes:</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="logo42.png" alt="Logo 42" style={{ height: '100px', width: 'auto', marginRight: '1px' }} />
            <img src="logoHFG.png" alt="Logo HFG" style={{ height: '120px', width: 'auto', marginRight: '10px' }} />
            <img src="logoUPC.png" alt="Logo UPC" style={{ height: '200px', width: 'auto', marginRight: '10px' }} />
          </div>
        </section>

    <h2>Contacto:</h2>
<p>Dirección: UPC Campus Nord, Barcelona</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.7290524163993!2d2.114427515622463!3d41.3862740073421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3010ae12e9f%3A0xe96f6d0b322c8107!2sUPC%20Campus%20Nord!5e0!3m2!1sen!2ses!4v1647408612043!5m2!1sen!2ses" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
<p>Correo electrónico: info@iyoudo.com</p>
<p>Teléfono: +34 123 456 789</p>
<p>© 2024 Iyoudo</p>

    </div>
  );
}

export default About;