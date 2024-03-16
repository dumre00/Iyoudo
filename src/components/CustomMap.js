import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Importieren Sie 'L' von 'leaflet'
import 'leaflet/dist/leaflet.css';

const CustomMap = () => {
  const tasks = [
    { name: 'Carrer de Casanova, 169, Eixample, 08036 Barcelona', coords: [41.3896, 2.1619] },
    { name: 'C/ de València, 212, L\'Eixample, 08011 Barcelona', coords: [41.3931, 2.1551] },
    { name: 'Carrer d\'Albert Einstein, 11, Nou Barris, 08042 Barcelona', coords: [41.4469, 2.1743] },
    { name: 'Carrer de Francisco Giner, 32, Gràcia, 08012 Barcelona', coords: [41.4012, 2.1538] },
    { name: 'Pg. de St. Joan, 179, Gràcia, 08037 Barcelona', coords: [41.3982, 2.1598] },
    { name: 'Passatge de la Banca, 7, Ciutat Vella, 08002 Barcelona', coords: [41.3834, 2.1744] },
    { name: 'Carrer de Zamora, 78, Sant Martí, 08018 Barcelona', coords: [41.4084, 2.2049] },
    { name: 'C/ Major de Sarrià, 61, Sarrià-Sant Gervasi, 08017 Barcelona', coords: [41.3999, 2.1186] },
    { name: 'C/ Gran de la Sagrera, Sant Andreu, 08027 Barcelona', coords: [41.4252, 2.1894] },
    { name: 'Gran Via de les Corts Catalanes, 399, L\'Eixample, 08015 Barcelona', coords: [41.3949, 2.1582] },
    { name: 'C. de Pere Galvany, 19, 08950 Esplugues de Llobregat, Barcelona', coords: [41.3864, 2.0868] },
    { name: 'C/ de la Diputació, 349, L\'Eixample, 08009 Barcelona', coords: [41.3926, 2.1651] },
    { name: 'C/ de la Indústria, 427, 08918 Badalona, Barcelona', coords: [41.4414, 2.2382] }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}> {/* Zentrieren Sie das Container-Element */}
      <div style={{ width: '700px', height: '600px' }}> {/* Setzen Sie die Breite und Höhe des Containers */}
        <h1 style={{ textAlign: 'center' }}>Ayudantes ya registrados:</h1>
        <MapContainer center={[41.3851, 2.1734]} zoom={12} style={{ height: '100%', width: '100%' }}> {/* Setzen Sie die Höhe und Breite des Karten-Containers */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {tasks.map((task, index) => (
            <Marker key={index} position={task.coords} icon={L.icon({ iconUrl: '/custom-marker.png', iconSize: [40, 41] })}>
              <Popup>{task.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CustomMap;