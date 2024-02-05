import React, { useState, ChangeEvent, FormEvent } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { createDevice } from "../../../services/devices";
import { FormDataInterface } from "../../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const initialFormState = {
  name: "",
  mobileNumber: 0,
  lastConnection: "",
  latitude: 0,
  longitude: 0,
};

interface AddDeviceFormProps {
  onSubmit?: () => void;
}

const AddDeviceForm: React.FC<AddDeviceFormProps> = ({ onSubmit }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createDevice,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["devices"] });
    },
  });
  const [formData, setFormData] = useState<FormDataInterface>(initialFormState);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "latitude" || name === "longitude" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
    setFormData(initialFormState);
    setError(false);
    if (onSubmit) {
      onSubmit();
    }
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
            type="number"
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
          {error && (
            <Typography color="error" sx={{ textAlign: "center" }}>
              Something went wrong. Try again later
            </Typography>
          )}
        </Grid>
      </Grid>
    </form>
  );
};

export default AddDeviceForm;
