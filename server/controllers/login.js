const Login = require("../models/login");

const CreateLogin = async ({ password, email }) => {
  const data = await Login.create({ password, email });
  return { result: true, data };
};

const checkLogin = async ({ password, email }) => {
  const checkExistingUser = await Login.count({ where: { email, password } });
  if (checkExistingUser) {
    return { result: true, message: "با موفقیت وارد شدید" };
  } else {
    return { result: false, message: "ایمیل یا پسوورد اشتباه می باشد." };
  }
};

module.exports = {
  CreateLogin,
  checkLogin,
};
