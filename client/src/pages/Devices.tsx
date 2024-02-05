import React from "react";
import CustomTable from "../components/UI/CustomTable/CustomTable";
import { Alignment } from "../types";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CustomModal from "../components/UI/CustomModal/CustomModal";
import AddDeviceForm from "../components/UI/AddDeviceForm/AddDeviceForm";
import { useQuery } from "@tanstack/react-query";
import { fetchDevices } from "../services/devices";

const Devices: React.FC = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["devices"],
    queryFn: async () => await fetchDevices(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const TABLE_HEADERS = [
    { label: "Name" },
    { label: "Mobile Number", align: Alignment.RIGHT },
    { label: "Last connection", align: Alignment.RIGHT },
    { label: "Latitude", align: Alignment.RIGHT },
    { label: "Longitude", align: Alignment.RIGHT },
    { label: "Actions", align: Alignment.RIGHT },
  ];

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
        <Box
          sx={{
            width: "1000px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            sx={{ alignSelf: "flex-end" }}
            onClick={() => setModalOpen((prev) => !prev)}
          >
            <AddIcon />
            Add
          </Button>
          <CustomTable headers={TABLE_HEADERS} tableRows={data.data} />
          <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <Box
              sx={{
                width: "500px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                padding: "20px",
              }}
            >
              <Box sx={{ position: "absolute", top: "-20px", right: "-20px" }}>
                <Button color="primary" onClick={() => setModalOpen(false)}>
                  X
                </Button>
              </Box>
              <Typography>Add new device</Typography>
              <AddDeviceForm onSubmit={() => setModalOpen(false)} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              ></Box>
            </Box>
          </CustomModal>
        </Box>
      )}
      {isError && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>Something went wrong. Try again later</Typography>
        </Box>
      )}
    </div>
  );
};

export default Devices;
