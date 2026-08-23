import { ModalFormData } from "@minecraft/server-ui";
import { COLOR_NAMES } from "../config.js";
import { addWaypoint } from "../data/waypoints.js";

export function openAddWaypointForm(player) {
  const form = new ModalFormData()
    .title("Add Teleport Point")
    .textField("Waypoint Name", "e.g. Main Base")
    .dropdown("Name Color", COLOR_NAMES, { defaultValueIndex: 0 });

  form.show(player).then((res) => {
    if (res.canceled) return;

    const [nameInput, colorIndex] = res.formValues;
    const name = (nameInput ?? "").trim();

    if (name.length === 0) {
      player.sendMessage("§cWaypoint name cannot be empty.");
      return;
    }

    const loc = player.location;
    const waypoint = {
      name: name,
      color: COLOR_NAMES[colorIndex],
      x: Math.floor(loc.x),
      y: Math.floor(loc.y),
      z: Math.floor(loc.z),
      dimension: player.dimension.id
    };

    if (addWaypoint(player, waypoint)) {
      player.sendMessage(`§aWaypoint "${name}" saved!`);
      player.playSound("random.orb");
    }
  });
}
