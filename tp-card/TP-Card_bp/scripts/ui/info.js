import { MessageFormData } from "@minecraft/server-ui";
import { ADDON_NAME, ADDON_VERSION, CREATOR, CHANGELOG } from "../config.js";
import { openMainMenu } from "./mainMenu.js";

export function openChangelog(player) {
  const form = new MessageFormData()
    .title("Changelog - " + ADDON_NAME)
    .body(CHANGELOG.join("\n\n"))
    .button1("Back")
    .button2("OK");
  form.show(player).then((res) => {
    if (!res.canceled && res.selection === 0) openMainMenu(player);
  });
}

export function openCredit(player) {
  const form = new MessageFormData()
    .title("Credit")
    .body(
      `${ADDON_NAME} v${ADDON_VERSION}\n\n` +
      `Created by: §b${CREATOR}§r\n` +
      `Thanks for using this addon!`
    )
    .button1("Back")
    .button2("OK");
  form.show(player).then((res) => {
    if (!res.canceled && res.selection === 0) openMainMenu(player);
  });
}
