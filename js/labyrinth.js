document.getElementById("StartButton").addEventListener("click", function () {
  createTileMap();
});

//default state of tiles in grid
const tiles = [
  {'row': 'A', 'column': '1', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'A', 'column': '2', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'A', 'column': '3', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowdown', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'A', 'column': '4', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'A', 'column': '5', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowdown', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'A', 'column': '6', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'A', 'column': '7', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowdown', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'A', 'column': '8', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'A', 'column': '9', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'B', 'column': '1', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'B', 'column': '2', 'moveable': false, 'location': false, 'image': 'tile_reddot', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'B', 'column': '3', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'B', 'column': '4', 'moveable': false, 'location': false, 'image': 'tile_skull', 'orientation': 1, 'checked': false, 'players': [], 'item': 'skull'},
  {'row': 'B', 'column': '5', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'B', 'column': '6', 'moveable': false, 'location': false, 'image': 'tile_sword', 'orientation': 1, 'checked': false, 'players': [], 'item': 'sword'},
  {'row': 'B', 'column': '7', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'B', 'column': '8', 'moveable': false, 'location': false, 'image': 'tile_bluedot', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'B', 'column': '9', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'C', 'column': '1', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowright', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '2', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '3', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '4', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '5', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '6', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '7', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '8', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '9', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowleft', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'D', 'column': '1', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'D', 'column': '2', 'moveable': false, 'location': false, 'image': 'tile_purse', 'orientation': 1, 'checked': false, 'players': [], 'item': 'purse'},
  {'row': 'D', 'column': '3', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'D', 'column': '4', 'moveable': false, 'location': false, 'image': 'tile_keys', 'orientation': 1, 'checked': false, 'players': [], 'item': 'keys'},
  {'row': 'D', 'column': '5', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'D', 'column': '6', 'moveable': false, 'location': false, 'image': 'tile_jewel', 'orientation': 1, 'checked': false, 'players': [], 'item': 'jewel'},
  {'row': 'D', 'column': '7', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'D', 'column': '8', 'moveable': false, 'location': false, 'image': 'tile_helmet', 'orientation': 1, 'checked': false, 'players': [], 'item': 'helmet'},
  {'row': 'D', 'column': '9', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'E', 'column': '1', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowright', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '2', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '3', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '4', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '5', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '6', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '7', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '8', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '9', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowleft', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'F', 'column': '1', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'F', 'column': '2', 'moveable': false, 'location': false, 'image': 'tile_book', 'orientation': 1, 'checked': false, 'players': [], 'item': 'book'},
  {'row': 'F', 'column': '3', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'F', 'column': '4', 'moveable': false, 'location': false, 'image': 'tile_crown', 'orientation': 1, 'checked': false, 'players': [], 'item': 'crown'},
  {'row': 'F', 'column': '5', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'F', 'column': '6', 'moveable': false, 'location': false, 'image': 'tile_treasure', 'orientation': 1, 'checked': false, 'players': [], 'item': 'treasure'},
  {'row': 'F', 'column': '7', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'F', 'column': '8', 'moveable': false, 'location': false, 'image': 'tile_candles', 'orientation': 1, 'checked': false, 'players': [], 'item': 'candles'},
  {'row': 'F', 'column': '9', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'G', 'column': '1', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowright', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '2', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '3', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '4', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '5', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '6', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '7', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '8', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '9', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowleft', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'H', 'column': '1', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'H', 'column': '2', 'moveable': false, 'location': false, 'image': 'tile_yellowdot', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'H', 'column': '3', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'H', 'column': '4', 'moveable': false, 'location': false, 'image': 'tile_map', 'orientation': 1, 'checked': false, 'players': [], 'item': 'map'},
  {'row': 'H', 'column': '5', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'H', 'column': '6', 'moveable': false, 'location': false, 'image': 'tile_ring', 'orientation': 1, 'checked': false, 'players': [], 'item': 'ring'},
  {'row': 'H', 'column': '7', 'moveable': true, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'H', 'column': '8', 'moveable': false, 'location': false, 'image': 'tile_greendot', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'H', 'column': '9', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'I', 'column': '1', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'I', 'column': '2', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'I', 'column': '3', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowup', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'I', 'column': '4', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'I', 'column': '5', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowup', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'I', 'column': '6', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'I', 'column': '7', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowup', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'I', 'column': '8', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'I', 'column': '9', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'}
];

function createTileMap() {
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {

      let isMoveable = false;

      if (tileSpaces.includes(rows[j] + "-" + (i + 1))) {
        isMoveable = true;
      }

      let tile = {
        row: rows[j],
        column: (i + 1),
        location: rows[j] + "-" + (i + 1),
        image: "none",
        orientation: "none",
        moveable: isMoveable,
        checked: false,
        item: "none",
        players: []
      }
      tiles.push(tile);
    }
  }
}
