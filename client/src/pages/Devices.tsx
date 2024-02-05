import React from "react";
import CustomTable from "../components/UI/CustomTable/CustomTable";
import { Alignment } from "../types";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CustomModal from "../components/UI/CustomModal/CustomModal";
import AddDeviceForm from "../components/UI/AddDeviceForm/AddDeviceForm";

const Devices: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const TABLE_HEADERS = [
    { label: "Name" },
    { label: "Mobile Number", align: Alignment.RIGHT },
    { label: "Last connection", align: Alignment.RIGHT },
    { label: "Latitude", align: Alignment.RIGHT },
    { label: "Longitude", align: Alignment.RIGHT },
    { label: "Actions", align: Alignment.RIGHT },
  ];

  const MOCK_DATA = [
    {
      id: 1,
      name: "test",
      mobile_number: 12312321,
      last_connection: "Today",
      latitude: 11.11,
      longitude: 22.11,
    },
  ];

  return (
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
      <CustomTable headers={TABLE_HEADERS} tableRows={MOCK_DATA} />
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
          <AddDeviceForm />
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
  );
};

export default Devices;
