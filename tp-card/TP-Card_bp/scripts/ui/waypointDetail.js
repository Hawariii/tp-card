import { world } from "@minecraft/server";
import { ActionFormData, MessageFormData } from "@minecraft/server-ui";
import { COLOR_CODES } from "../config.js";
import { deleteWaypoint, dimensionDisplayName } from "../data/waypoints.js";
import { openWaypointList } from "./waypointList.js";

export function openWaypointDetail(player, wp, index) {
  const colorCode = COLOR_CODES[wp.color] ?? "§f";
  const form = new ActionFormData()
    .title(colorCode + wp.name)
    .body(
      `§7Coordinates: §f${wp.x}, ${wp.y}, ${wp.z}\n` +
      `§7Dimension: §f${dimensionDisplayName(wp.dimension)}`
    )
    .button("Teleport Here")
    .button("Delete Waypoint")
    .button("Back");

  form.show(player).then((res) => {
    if (res.canceled) return;
    if (res.selection === 0) {
      teleportPlayer(player, wp);
    } else if (res.selection === 1) {
      confirmDelete(player, index, wp);
    } else {
      openWaypointList(player);
    }
  });
}

function teleportPlayer(player, wp) {
  const targetDim = world.getDimension(wp.dimension);
  player.teleport(
    { x: wp.x + 0.5, y: wp.y, z: wp.z + 0.5 },
    { dimension: targetDim }
  );
  player.sendMessage(`§aTeleported to §f${wp.name}§a.`);
  player.playSound("mob.endermen.portal");
}

function confirmDelete(player, index, wp) {
  const form = new MessageFormData()
    .title("Delete Waypoint")
    .body(`Are you sure you want to delete "${wp.name}"?`)
    .button1("Cancel")
    .button2("Delete");

  form.show(player).then((res) => {
    if (res.canceled) return;
    if (res.selection === 1) {
      deleteWaypoint(player, index);
      player.sendMessage(`§cWaypoint "${wp.name}" deleted.`);
      openWaypointList(player);
    } else {
      openWaypointDetail(player, wp, index);
    }
  });
}
