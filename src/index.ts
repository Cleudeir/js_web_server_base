import Controller from "./class/Controller";
import read from "./pages/read";
import update from "./pages/update";
import create from "./pages/create";
import remove from "./pages/remove";

Controller.get("/", () => {
  return { status: "online" };
});

Controller.get("/read", read);

Controller.post("/create", create);

Controller.put("/update", update);

Controller.remove("/remove", remove);
