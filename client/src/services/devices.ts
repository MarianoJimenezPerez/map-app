import axios from "axios";
import { FormDataInterface } from "../types";
export const fetchDevices = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/devices`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching devices:", error);
    throw error;
  }
};

export const createDevice = async (formData: FormDataInterface) => {
  try {
    await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/devices/create`,
      formData
    );
    console.log("Form submitted:", formData);
  } catch (error) {
    console.error("Error creating device:", error);
    throw error;
  }
};

export const deleteDevice = async (id: number) => {
  try {
    await axios.delete(
      `${import.meta.env.VITE_API_BASE_URL}/devices/delete/${id}`
    );
    console.log("Device deleted");
  } catch (error) {
    console.error("Error deleting device:", error);
    throw error;
  }
};
