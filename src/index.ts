import Controller from "./class/Controller";
import jsonwebtoken from "jsonwebtoken";
import Environment from "./class/Environment";
import { userController } from "./pages/user/user.controller";
import { authenticateController } from "./pages/authenticate/autenticate.controller";

Controller.get(
  "/",
  () => {
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

userController("user", true);
authenticateController("authenticate", false);
