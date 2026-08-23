// ================= ENTRY POINT =================
// This file is intentionally thin: it only registers event listeners.
// UI logic lives in ui/, data logic lives in data/, constants live in
// config.js. Adding a new feature = add a new file, no need to touch
// this one.

import { world, system } from "@minecraft/server";
import { WAYPOINT_ITEM_ID } from "./config.js";
import { openMainMenu } from "./ui/mainMenu.js";

world.afterEvents.itemUse.subscribe((event) => {
  const { source: player, itemStack } = event;
  if (itemStack?.typeId !== WAYPOINT_ITEM_ID) return;
  system.run(() => openMainMenu(player));
});
