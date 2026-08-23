import { ActionFormData } from "@minecraft/server-ui";
import { ADDON_NAME, ADDON_VERSION, CREATOR } from "../config.js";
import { openAddWaypointForm } from "./addWaypoint.js";
import { openWaypointList } from "./waypointList.js";
import { openChangelog, openCredit } from "./info.js";

export function openMainMenu(player) {
  const form = new ActionFormData()
    .title(ADDON_NAME)
    .body(
      `§7${ADDON_NAME} §fv${ADDON_VERSION} §7by §f${CREATOR}\n\n` +
      `§rChoose a menu below:`
    )
    .button("Add Teleport Point")
    .button("Waypoint List")
    .button("Changelog")
    .button("Credit");

  form.show(player).then((res) => {
    if (res.canceled) return;
    switch (res.selection) {
      case 0:
        openAddWaypointForm(player);
        break;
      case 1:
        openWaypointList(player);
        break;
      case 2:
        openChangelog(player);
        break;
      case 3:
        openCredit(player);
        break;
    }
  });
}
