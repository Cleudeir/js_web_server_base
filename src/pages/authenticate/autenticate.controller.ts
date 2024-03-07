import Controller from "../../class/Controller";
import { authenticateService } from "./authenticate.service";

export async function authenticateController(
  routeName: string,
  auth: boolean = true
) {
  const { create, read, remove, update } = await authenticateService();

  Controller.get("/" + routeName + "/read", read, auth);
  Controller.post("/" + routeName + "/create", create, auth);
  Controller.put("/" + routeName + "/update", update, auth);
  Controller.remove("/" + routeName + "/remove", remove, auth);
}
