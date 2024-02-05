import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import Map from "../components/UI/Map/Map";
import { useQuery } from "@tanstack/react-query";
import { fetchDevices } from "../services/devices";
import "leaflet/dist/leaflet.css";

const Home: React.FC = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["devices"],
    queryFn: async () => await fetchDevices(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <div>
      {isLoading && !isError && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Skeleton
            variant="rectangular"
            width={1000}
            height={600}
            animation="wave"
          />
        </Box>
      )}
      {!isError && !isLoading && data !== undefined && (
        <Map markers={data.data} />
      )}

      {isError && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>Something went wrong. Try again later</Typography>
        </Box>
      )}
    </div>
  );
};

export default Home;
