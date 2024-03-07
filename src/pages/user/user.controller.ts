import Controller from "../../class/Controller";
import { userService } from "./user.service";

export async function userController(routeName: string, auth: boolean = true) {
  const { create, read, remove, update } = await userService();

  Controller.get("/" + routeName + "/read", read, auth);
  Controller.post("/" + routeName + "/create", create, auth);
  Controller.put("/" + routeName + "/update", update, auth);
  Controller.remove("/" + routeName + "/remove", remove, auth);
}
