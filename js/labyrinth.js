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
  {'row': 'B', 'column': '3', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'B', 'column': '4', 'moveable': false, 'location': false, 'image': 'tile_skull', 'orientation': 1, 'checked': false, 'players': [], 'item': 'skull'},
  {'row': 'B', 'column': '5', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'B', 'column': '6', 'moveable': false, 'location': false, 'image': 'tile_sword', 'orientation': 1, 'checked': false, 'players': [], 'item': 'sword'},
  {'row': 'B', 'column': '7', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'B', 'column': '8', 'moveable': false, 'location': false, 'image': 'tile_bluedot', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'B', 'column': '9', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'C', 'column': '1', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowright', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '2', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '3', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '4', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '5', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '6', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '7', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '8', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'C', 'column': '9', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowleft', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'D', 'column': '1', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'D', 'column': '2', 'moveable': false, 'location': false, 'image': 'tile_purse', 'orientation': 1, 'checked': false, 'players': [], 'item': 'purse'},
  {'row': 'D', 'column': '3', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'D', 'column': '4', 'moveable': false, 'location': false, 'image': 'tile_keys', 'orientation': 1, 'checked': false, 'players': [], 'item': 'keys'},
  {'row': 'D', 'column': '5', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'D', 'column': '6', 'moveable': false, 'location': false, 'image': 'tile_jewel', 'orientation': 1, 'checked': false, 'players': [], 'item': 'jewel'},
  {'row': 'D', 'column': '7', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'D', 'column': '8', 'moveable': false, 'location': false, 'image': 'tile_helmet', 'orientation': 1, 'checked': false, 'players': [], 'item': 'helmet'},
  {'row': 'D', 'column': '9', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'E', 'column': '1', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowright', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '2', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '3', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '4', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '5', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '6', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '7', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '8', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'E', 'column': '9', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowleft', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'F', 'column': '1', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'F', 'column': '2', 'moveable': false, 'location': false, 'image': 'tile_book', 'orientation': 1, 'checked': false, 'players': [], 'item': 'book'},
  {'row': 'F', 'column': '3', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'F', 'column': '4', 'moveable': false, 'location': false, 'image': 'tile_crown', 'orientation': 1, 'checked': false, 'players': [], 'item': 'crown'},
  {'row': 'F', 'column': '5', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'F', 'column': '6', 'moveable': false, 'location': false, 'image': 'tile_treasure', 'orientation': 1, 'checked': false, 'players': [], 'item': 'treasure'},
  {'row': 'F', 'column': '7', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'F', 'column': '8', 'moveable': false, 'location': false, 'image': 'tile_candles', 'orientation': 1, 'checked': false, 'players': [], 'item': 'candles'},
  {'row': 'F', 'column': '9', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'G', 'column': '1', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowright', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '2', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '3', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '4', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '5', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '6', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '7', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '8', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'G', 'column': '9', 'moveable': false, 'location': false, 'image': 'tile_bg_arrowleft', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},

  {'row': 'H', 'column': '1', 'moveable': false, 'location': false, 'image': 'none', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'H', 'column': '2', 'moveable': false, 'location': false, 'image': 'tile_yellowdot', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'H', 'column': '3', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'H', 'column': '4', 'moveable': false, 'location': false, 'image': 'tile_map', 'orientation': 1, 'checked': false, 'players': [], 'item': 'map'},
  {'row': 'H', 'column': '5', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
  {'row': 'H', 'column': '6', 'moveable': false, 'location': false, 'image': 'tile_ring', 'orientation': 1, 'checked': false, 'players': [], 'item': 'ring'},
  {'row': 'H', 'column': '7', 'moveable': true, 'location': false, 'image': '', 'orientation': 1, 'checked': false, 'players': [], 'item': 'none'},
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

//unique tile names for movable tiles
var movingTiles = ['tile_troll', 'tile_lizard', 'tile_beetle', 'tile_spider', 'tile_rat', 'tile_moth', 'tile_princess', 'tile_genie', 'tile_ghost', 'tile_dragon', 'tile_bat', 'tile_owl'];

//add non-unique tiles (10 corner & 12 straight tiles)
for (let i = 0; i < 10; i++) {
  movingTiles.push('tile_corner');
}

for (let i = 0; i < 12; i++) {
  movingTiles.push('tile_straight');
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

//Randomize orientation of tiles and append the appropriate image filename onto
function randomizeOrientation(tileName) {
  var rndNum = Math.random();
  rndNum = rndNum * 4;
  rndNum = Math.floor(rndNum);

  //For tile paths with three path directions
  if (tileName === "tile_troll" || tileName === "tile_princess" || tileName === "tile_genie" || tileName === "tile_ghost" || tileName === "tile_dragon" || tileName === "tile_bat") {
    switch (rndNum) {
      case 0:
        tileName = tileName + "_nes";
        break;
      case 1:
        tileName = tileName + "_wes";
        break;
      case 2:
        tileName = tileName + "_wne";
        break;
      case 3:
        tileName = tileName + "_wns";
        break;
    }
  }

   //For tile paths with two path directions
  if (tileName === "tile_owl" || tileName === "tile_lizard" || tileName === "tile_beetle" || tileName === "tile_spider" || tileName === "tile_rat" || tileName === "tile_moth" || tileName === "tile_corner") {
    switch (rndNum) {
      case 0:
        tileName = tileName + "_es";
        break;
      case 1:
        tileName = tileName + "_ne";
        break;
      case 2:
        tileName = tileName + "_wn";
        break;
      case 3:
        tileName = tileName + "_ws";
        break;
    }
  }

   //For the empty straight tiles with only two path directions
  if (tileName === "tile_straight") {
    switch (rndNum) {
      case 0:
        tileName = tileName + "_ew";
        break;
      case 1:
        tileName = tileName + "_we";
        break;
      case 2:
        tileName = tileName + "_ns";
        break;
      case 3:
        tileName = tileName + "_sn";
        break;
    }
  }

  return tileName;
}

function createTileMap() {
//shuffle order of moveable tiles
movingTiles = shuffle(movingTiles);
console.log(movingTiles);

// Set all tile locations & set non-moving tiles bg images
for (let i = 0; i < tiles.length; i++) {
  tiles[i].location = tiles[i].row + "-" + tiles[i].column;
  if (tiles[i].image != "none" || tiles[i].image != "") {
    document.getElementById(tiles[i].location).style.backgroundImage = "url('img/" + tiles[i].image + ".png')";
  }
}

// Set moving tiles bg images with randomized orientation
 counter = 0;
for (let i = 0; i < tiles.length; i++) {
  if (tiles[i].image == "") {

    document.getElementById(tiles[i].location).style.backgroundImage = "url('img/" + randomizeOrientation(movingTiles[counter]) + ".png')";
    tiles[i].image = movingTiles[counter];
    counter++;
  }
}
}
