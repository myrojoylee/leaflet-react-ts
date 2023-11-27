import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapBox = (): JSX.Element => {
  return (
    <MapContainer
      center={[40.29066735, -75.21070232492798]}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        maxZoom={10}
        opacity={3}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=021e75b0e3380e236b4ff6031ae2dde4"
      />
      <Marker position={[40.29066735, -75.21070232492798]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapBox;
