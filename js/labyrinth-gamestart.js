document.getElementById("StartButton").disabled = true;
document.getElementById("witch").addEventListener("change", function () { validatePlayerSelections(); });
document.getElementById("sorceress").addEventListener("change", function () { validatePlayerSelections(); });
document.getElementById("wizard").addEventListener("change", function () { validatePlayerSelections(); });
document.getElementById("warlock").addEventListener("change", function () { validatePlayerSelections(); });

var selectedPlayers = [];

function validatePlayerSelections() {
    var players = document.querySelectorAll('input[type=checkbox]:checked');
    selectedPlayers = [];
    for (var i = 0; i < players.length; i++) {
        selectedPlayers.push(players[i].value)
    }
    if (selectedPlayers.length >= 2) {
        document.getElementById("StartButton").disabled = false;
    } else {
        document.getElementById("StartButton").disabled = true;
    }
    console.log(selectedPlayers);
}