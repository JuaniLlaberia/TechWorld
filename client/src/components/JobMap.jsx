import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Modal from './Modal';

const JobMap = ({ coordinates, children }) => {
  const [lng, lat] = coordinates;

  return (
    <Modal>
      <Modal.Open opens='map'>
        <div>{children}</div>
      </Modal.Open>
      <Modal.Window windowName='map' title='Job location'>
        <MapContainer center={[lat, lng]} zoom={12} maxZoom={15} minZoom={12}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
          />
          <Marker position={[lat, lng]} color='red' />
        </MapContainer>
      </Modal.Window>
    </Modal>
  );
};

export default JobMap;
