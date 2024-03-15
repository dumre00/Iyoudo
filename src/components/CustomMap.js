import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Importieren Sie 'L' von 'leaflet'
import 'leaflet/dist/leaflet.css';

const CustomMap = () => {
  const tasks = [
    { name: 'Carrer de Casanova, 169, Eixample, 08036 Barcelona', coords: [41.3896, 2.1619] },
    { name: 'C/ de València, 212, L\'Eixample, 08011 Barcelona', coords: [41.3931, 2.1551] },
    { name: 'Carrer d\'Albert Einstein, 11, Nou Barris, 08042 Barcelona', coords: [41.4469, 2.1743] }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}> {/* Zentrieren Sie das Container-Element */}
      <div style={{ width: '700px', height: '600px' }}> {/* Setzen Sie die Breite und Höhe des Containers */}
        <h1 style={{ textAlign: 'center' }}>Ayudantes ya registrados:</h1>
        <MapContainer center={[41.3851, 2.1734]} zoom={12} style={{ height: '100%', width: '100%' }}> {/* Setzen Sie die Höhe und Breite des Karten-Containers */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {tasks.map((task, index) => (
            <Marker key={index} position={task.coords} icon={L.icon({ iconUrl: '/custom-marker.png', iconSize: [25, 41] })}>
              <Popup>{task.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CustomMap;
