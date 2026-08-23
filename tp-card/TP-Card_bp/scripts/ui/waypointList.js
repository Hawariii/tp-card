import { ActionFormData, MessageFormData } from "@minecraft/server-ui";
import { COLOR_CODES } from "../config.js";
import { getWaypoints, dimensionDisplayName } from "../data/waypoints.js";
import { openWaypointDetail } from "./waypointDetail.js";
import { openMainMenu } from "./mainMenu.js";

export function openWaypointList(player) {
  const waypoints = getWaypoints(player);

  if (waypoints.length === 0) {
    const form = new MessageFormData()
      .title("Waypoint List")
      .body("You don't have any waypoints yet.\nAdd one from the main menu.")
      .button1("Back")
      .button2("OK");
    form.show(player).then((res) => {
      if (!res.canceled) openMainMenu(player);
    });
    return;
  }

  const form = new ActionFormData().title("Waypoint List (" + waypoints.length + ")");

  waypoints.forEach((wp) => {
    const colorCode = COLOR_CODES[wp.color] ?? "§f";
    const label =
      colorCode + wp.name + "\n§7" +
      `${wp.x}, ${wp.y}, ${wp.z} - ${dimensionDisplayName(wp.dimension)}`;
    form.button(label);
  });

  form.show(player).then((res) => {
    if (res.canceled) return;
    openWaypointDetail(player, waypoints[res.selection], res.selection);
  });
}
