import React, { useState, ChangeEvent, FormEvent } from "react";
import { Grid, TextField, Button } from "@mui/material";

interface FormData {
  name: string;
  mobileNumber: number;
  lastConnection: string;
  latitude: number;
  longitude: number;
}

const AddDeviceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobileNumber: 0,
    lastConnection: "",
    latitude: 0,
    longitude: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "latitude" || name === "longitude" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ color: "#fff" }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="filled"
            value={formData.name}
            onChange={handleChange}
            color="secondary"
            sx={{ backgroundColor: "#b0b8c4" }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobileNumber"
            variant="filled"
            value={formData.mobileNumber}
            onChange={handleChange}
            color="secondary"
            sx={{ backgroundColor: "#b0b8c4" }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Last Connection"
            name="lastConnection"
            type="datetime-local"
            variant="filled"
            value={formData.lastConnection}
            onChange={handleChange}
            color="secondary"
            sx={{ backgroundColor: "#b0b8c4" }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Latitude"
            name="latitude"
            type="number"
            variant="filled"
            value={formData.latitude}
            onChange={handleChange}
            color="secondary"
            sx={{ backgroundColor: "#b0b8c4" }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Longitude"
            name="longitude"
            type="number"
            variant="filled"
            value={formData.longitude}
            onChange={handleChange}
            color="secondary"
            sx={{ backgroundColor: "#b0b8c4" }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "100%" }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddDeviceForm;
