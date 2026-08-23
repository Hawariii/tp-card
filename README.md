# TP-Card

TP-Card is a Minecraft Bedrock Edition add-on that adds a custom item for saving, managing, and teleporting to named waypoints across the world.

This project contains the behavior pack and resource pack needed to run the addon in a Bedrock world.

## Features

- Save custom waypoint locations
- View all saved waypoints in a menu
- Delete waypoints you no longer need
- Teleport to any saved location
- Assign a custom color to waypoint labels
- Works from a custom item called the TP-Card

## Project structure

- [tp-card/TP-Card_bp](tp-card/TP-Card_bp) — behavior pack containing item definitions, recipes, scripts, and UI logic
- [tp-card/TP-Card_rp](tp-card/TP-Card_rp) — resource pack containing textures and language strings
- [LICENSE](LICENSE) — project license

## Addon item

The custom item is defined in [tp-card/TP-Card_bp/items/tp_card.json](tp-card/TP-Card_bp/items/tp_card.json) and is crafted using the recipe in [tp-card/TP-Card_bp/recipes/tp_card.json](tp-card/TP-Card_bp/recipes/tp_card.json).

The item ID is:

- `aizhu:tp_card`

## How to install

1. Open the Minecraft Bedrock add-ons folder for your world or profile.
2. Copy the entire [tp-card](tp-card) folder into the add-ons directory as a valid Bedrock pack.
3. Import the behavior and resource packs in Minecraft.
4. Enable the packs in your world.
5. Craft the TP-Card item and use it in-game.

## How to use

1. Craft the TP-Card item.
2. Use the item in your hand to open the TP-Card menu.
3. Choose Add Teleport Point to save your current location.
4. Open the waypoint list to select a location to teleport to.
5. Use the menu to rename, recolor, or delete saved waypoints.

## Scripts and logic

The main entry point is [tp-card/TP-Card_bp/scripts/main.js](tp-card/TP-Card_bp/scripts/main.js), which opens the main menu when the player uses the TP-Card item.

Core logic is organized into:

- [tp-card/TP-Card_bp/scripts/config.js](tp-card/TP-Card_bp/scripts/config.js) — addon constants and colors
- [tp-card/TP-Card_bp/scripts/ui](tp-card/TP-Card_bp/scripts/ui) — menus and forms for add/list/info flows
- [tp-card/TP-Card_bp/scripts/data](tp-card/TP-Card_bp/scripts/data) — waypoint storage and data handling

## Compatibility

- Minecraft Bedrock Edition
- Minimum engine version: 1.26.40

## Credits

- Addon created by Aizhu

## License

This project is distributed under the license in [LICENSE](LICENSE).
