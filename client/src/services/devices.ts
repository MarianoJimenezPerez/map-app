import axios from "axios";
import { FormDataInterface } from "../types";
export const fetchDevices = async () => {
  try {
    const response = await axios.get("http://localhost:8080/devices");
    return response.data;
  } catch (error) {
    console.error("Error fetching devices:", error);
    throw error;
  }
};

export const createDevice = async (formData: FormDataInterface) => {
  try {
    await axios.post("http://localhost:8080/devices/create", formData);
    console.log("Form submitted:", formData);
  } catch (error) {
    console.error("Error creating device:", error);
    throw error;
  }
};

export const deleteDevice = async (id: number) => {
  try {
    await axios.delete("http://localhost:8080/devices/delete/" + id);
    console.log("Device deleted");
  } catch (error) {
    console.error("Error deleting device:", error);
    throw error;
  }
};
