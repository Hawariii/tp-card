// ================= CONFIG =================
// All constants for the addon live here so they can be tweaked
// without touching any logic files.

export const ADDON_NAME = "TP-Card";
export const ADDON_VERSION = "1.0.0";
export const CREATOR = "Aizhu";
export const WAYPOINT_ITEM_ID = "aizhu:tp_card"; // change if you rename the namespace/item

export const CHANGELOG = [
  "v1.0.0 - Initial release: add/list/delete/teleport waypoints, custom name color."
];

export const COLOR_CODES = {
  "White": "§f",
  "Red": "§c",
  "Blue": "§b",
  "Green": "§a",
  "Yellow": "§e",
  "Purple": "§d",
  "Gray": "§7",
  "Gold": "§6"
};

export const COLOR_NAMES = Object.keys(COLOR_CODES);

// Safe limit for the waypoints JSON string length (characters).
// Bedrock enforces a size limit on dynamic properties, this keeps us safe.
export const MAX_WAYPOINTS_JSON_LENGTH = 30000;
