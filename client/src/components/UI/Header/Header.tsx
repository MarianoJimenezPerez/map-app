import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(16, 20, 24, 0.8)",
        color: "#fff",
        borderBottom: "1px solid rgba(204, 229, 255, 0.08)",
        marginBottom: "20px",
        backdropFilter: "blur(8px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          width: "1140px",
          margin: "0 auto",
          padding: "20px 0",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
            Vodafone + MJP
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/devices"}>Devices</NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
