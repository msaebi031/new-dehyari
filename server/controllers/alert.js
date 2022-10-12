const Alert = require("../models/alert");

const CreateAlert = async () => {
  await Alert.create();
};

const SelectAlert = async () => {
  return await Alert.findOne({ where: { id: 1 } });
};

const UpdateAlert = async ({ power, p }) => {
  const alert = await Alert.findOne({ where: { id: 1 } });
  alert.power = power;
  alert.p = p;
  await alert.save();
};

module.exports = {
  CreateAlert,
  SelectAlert,
  UpdateAlert,
};
