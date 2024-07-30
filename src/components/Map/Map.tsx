import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
// import { useMap } from 'react-leaflet/hooks'
import Marker from './Marker';
import { type MarkerProps } from './Marker';

import 'leaflet/dist/leaflet.css';

function Map(props: MarkerProps) {
  return (
    <MapContainer
      center={[45.0, -120.0]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {props.persons.map((person) => {
        if (person.isDisplayed) {
          return (
            <Marker
              latitude={person.latitude}
              longitude={person.longitude}
              key={person.id}
              isSelected={person.isSelected}
              phoneNumbers={person.phoneNumbers}
              firstName={person.firstName}
              lastName={person.lastName}
              jobTitle={person.jobTitle}
              organization={person.organization}
              id={person.id}
              avatar={person.avatar}
            >
            </Marker>
          );
        }
      })}
    </MapContainer>
  );
}

export default Map;
