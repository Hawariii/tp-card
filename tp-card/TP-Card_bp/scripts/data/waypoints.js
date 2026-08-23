// ================= DATA LAYER =================
// Everything related to waypoint storage (dynamic properties) lives here.
// If storage ever needs to change (world-scoped, scoreboard, etc.) only
// this file needs to change - the UI never touches storage directly.

import { MAX_WAYPOINTS_JSON_LENGTH } from "../config.js";

export function getWaypoints(player) {
  const raw = player.getDynamicProperty("waypoints");
  if (!raw || typeof raw !== "string") return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function saveWaypoints(player, waypoints) {
  const json = JSON.stringify(waypoints);
  if (json.length > MAX_WAYPOINTS_JSON_LENGTH) {
    player.sendMessage("§cFailed to save: waypoint data is too large.");
    return false;
  }
  player.setDynamicProperty("waypoints", json);
  return true;
}

export function addWaypoint(player, waypoint) {
  const waypoints = getWaypoints(player);
  waypoints.push(waypoint);
  return saveWaypoints(player, waypoints);
}

export function deleteWaypoint(player, index) {
  const waypoints = getWaypoints(player);
  if (index < 0 || index >= waypoints.length) return false;
  waypoints.splice(index, 1);
  return saveWaypoints(player, waypoints);
}

export function dimensionDisplayName(dimId) {
  if (dimId === "minecraft:overworld") return "Overworld";
  if (dimId === "minecraft:nether") return "Nether";
  if (dimId === "minecraft:the_end") return "The End";
  return dimId;
}
