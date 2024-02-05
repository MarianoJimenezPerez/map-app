import { DataTypes } from "sequelize";
import db from "./../db/config.js";

const DeviceModel = db.define("Device", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 90],
    },
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: -90,
      max: 90,
    },
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: -180,
      max: 180,
    },
  },
});

export default DeviceModel;
