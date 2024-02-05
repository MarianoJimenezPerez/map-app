import { DataTypes } from "sequelize";
import db from "./../db/config.js";

const DeviceModel = db.define("Device", {
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
