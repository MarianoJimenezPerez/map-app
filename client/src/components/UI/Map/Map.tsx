import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { DeviceInterface } from "../../../types";
import { Box, Typography } from "@mui/material";

interface MapProps {
  markers: DeviceInterface[];
}

const Map: React.FC<MapProps> = ({ markers }) => {
  return (
    <MapContainer center={[39.4227, -0.3525]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers &&
        markers.map((marker) => {
          return (
            <Marker
              position={[marker.latitude, marker.longitude]}
              key={marker.id}
            >
              <Popup>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                      Name:&nbsp;
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                      {marker.name}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                      Mobile:&nbsp;
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                      {marker.mobileNumber}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                      LC:&nbsp;
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                      {marker.lastConnection}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                      LT:&nbsp;
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                      {marker.latitude}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                      LG:&nbsp;
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                      {marker.longitude}
                    </Typography>
                  </Box>
                </Box>
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
};

export default Map;
