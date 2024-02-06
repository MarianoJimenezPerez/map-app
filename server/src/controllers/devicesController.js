import db from "../db/config.js";
import DeviceModel from "../models/deviceModel.js";

export const generateContent = async (req, res) => {
  db.sync()
    .then(() => {
      console.log("Table created successfully");
    })
    .catch((error) => {
      console.error("Error creating table:", error);
    });
};

export const getAllDevices = async (req, res) => {
  let connection;

  try {
    connection = await db.authenticate();
    const devices = await DeviceModel.findAll();
    res.json({ data: devices });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

export const getDeviceById = async (req, res) => {
  let connection;

  const deviceId = req.params.id;

  try {
    connection = await db.authenticate();

    const device = await DeviceModel.findByPk(deviceId);

    if (device) {
      res.json({ data: device });
    } else {
      res.status(404).json({ error: "Device not found." });
    }
  } catch (error) {
    console.error("Error retrieving device by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

export const createDevice = async (req, res) => {
  let connection;

  const { name, mobileNumber, lastConnection, latitude, longitude } = req.body;

  try {
    connection = await db.authenticate();
    const newDevice = await DeviceModel.create({
      name,
      mobileNumber,
      lastConnection,
      latitude,
      longitude,
    });
    res
      .status(201)
      .json({ data: newDevice, message: "Device created successfully." });
  } catch (error) {
    console.error("Error creating device:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

export const updateDevice = async (req, res) => {
  let connection;

  const deviceId = req.params.id;
  const { latitude, longitude } = req.body;

  try {
    connection = await db.authenticate();

    const updatedDevice = await DeviceModel.update(
      { latitude, longitude },
      { where: { id: deviceId } }
    );

    if (updatedDevice[0] === 1) {
      res.json({ message: "Device updated successfully." });
    } else {
      res.status(404).json({ error: "Device not found." });
    }
  } catch (error) {
    console.error("Error updating device:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

export const deleteDevice = async (req, res) => {
  let connection;

  const deviceId = req.params.id;

  try {
    connection = await db.authenticate();

    const deletedDevice = await DeviceModel.destroy({
      where: { id: deviceId },
    });

    if (deletedDevice === 1) {
      res.json({ message: "Device deleted successfully." });
    } else {
      res.status(404).json({ error: "Device not found." });
    }
  } catch (error) {
    console.error("Error deleting device:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};
