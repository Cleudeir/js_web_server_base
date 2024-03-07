import Controller from "./class/Controller";
import jsonwebtoken from "jsonwebtoken";
import Environment from "./class/Environment";
import { userController } from "./pages/user/user.controller";
import { authenticateController } from "./pages/authenticate/autenticate.controller";
import Database from "./class/Database";
import { userScheme } from "./scheme/user.scheme";

(async () => {
  //database
  const { connect, models, sequelize } = Database;
  await connect();
  if (!sequelize) return;
  await userScheme();
  console.log(await models.User.findAll());
  //constroller
  await userController("user", true);
  await authenticateController("authenticate", false);
})();

Controller.get(
  "/",
  async () => {
    const token = jsonwebtoken.sign(
      { name: "copm" },
      Environment.get("KEY_JWT"),
      {
        expiresIn: "7d",
      }
    );
    return { token: token };
  },
  false
);
