import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
function LocationMap({location}) {
  const {
    coordinates: {latitude, longitude},
  } = location;
  const position = [latitude, longitude];

  return (
    <>
      <div style={{width: "100%", height: "30vh"}}>
        <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={false}
          style={{width: "100%", height: "30vh"}}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>This is user</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default LocationMap;
