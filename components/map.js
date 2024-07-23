import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "@/components/icon";

export default function Map({ events }) {
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={4}
      scrollWheelZoom={true}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map((event) => (
        <Marker
          key={event.id}
          icon={icon}
          position={[
            event.geometry[0].coordinates[1],
            event.geometry[0].coordinates[0],
          ]}
        >
          <Popup>{event.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
