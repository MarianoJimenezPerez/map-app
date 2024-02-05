import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Alignment, DeviceInterface } from "../../../types";

interface TableHeader {
  label: string;
  align?: Alignment;
}
interface CustomTableProps {
  headers: TableHeader[];
  tableRows: DeviceInterface[];
}

const CustomTable: React.FC<CustomTableProps> = ({ headers, tableRows }) => {
  return (
    <TableContainer>
      <Table
        sx={{ width: 1000, margin: "0 auto", color: "#B0B8C4" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            {headers.map((header) => {
              return (
                <TableCell
                  key={header.label}
                  align={header.align ? header.align : "left"}
                  sx={{ color: "#B0B8C4" }}
                >
                  {header.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((device) => (
            <TableRow key={device.id}>
              <TableCell component="th" scope="row" sx={{ color: "#B0B8C4" }}>
                {device.name}
              </TableCell>
              <TableCell align="right" sx={{ color: "#B0B8C4" }}>
                {device.mobile_number}
              </TableCell>
              <TableCell align="right" sx={{ color: "#B0B8C4" }}>
                {device.last_connection}
              </TableCell>
              <TableCell align="right" sx={{ color: "#B0B8C4" }}>
                {device.latitude}
              </TableCell>
              <TableCell align="right" sx={{ color: "#B0B8C4" }}>
                {device.longitude}
              </TableCell>
              <TableCell align="right" sx={{ color: "#B0B8C4" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button>
                    <EditNoteIcon color="primary" />
                  </Button>
                  <Button>
                    <DeleteIcon color="error" />
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
