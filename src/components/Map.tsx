import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { WomanInStem } from '../data/womenInStem';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icons
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map: React.FC<{ women: WomanInStem[] }> = ({ women }) => {
  const [activePopup, setActivePopup] = React.useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setActivePopup(index);
  };

  const handleMouseOut = () => {
    setActivePopup(null);
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      style={{ height: '600px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {women.map((woman, index) => (
        <Marker
          key={index}
          position={woman.location}
          eventHandlers={{
            mouseover: () => handleMouseOver(index),
            mouseout: handleMouseOut,
          }}
        >
          {activePopup === index && (
            <Popup>
              <strong>{woman.name}</strong>
              <br />
              {woman.subject}
              <br />
              {woman.birthYear} - {woman.deathYear ?? 'Unknown'}
              <br />
              {woman.description}
              <br />
              <a
                href={woman.resourceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </Popup>
          )}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
