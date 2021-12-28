
document.getElementById("StartButton").addEventListener("click", function () {
  createTileMap();
});

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
