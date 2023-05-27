const UserModel = require("../models/user.model");

const createUser = async (userData) => {
  const user = await UserModel.create(userData);
  return user;
};

const updateUser = () => {};

module.exports = {
  createUser,
};
