const UserSevice = require("../services/user.service");

const user_post = async (req, res) => {
  try {
    // all the validations are done here

    // then create a new user
    const user = await UserSevice.createUser(req.body);

    res.status(200).send({
      status: "ok",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      error: "Internal Server Error",
    });
  }
};

module.exports = {
  user_post,
};
