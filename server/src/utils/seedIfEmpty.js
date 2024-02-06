import seedData from "../db/seedData.js";
import DeviceModel from "../models/deviceModel.js";

export const seedIfEmpty = async () => {
  try {
    const count = await DeviceModel.count();
    if (count === 0) {
      await DeviceModel.bulkCreate(seedData);
      console.log("Data seeded");
    } else {
      console.log("The table not need the seed");
    }
  } catch (error) {
    console.error("Error during the devices table check: ", error);
  }
};
