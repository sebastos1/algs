function hide() {
    function setcell(bruh) {
        for (let num = 0; num < tables; num++) {
            var rows = document.getElementsByTagName("table")[num].rows;
            for (var i = 0, row; row = rows[i]; i++) {
                var cell = row.cells[2];
                cell.style.fontSize = bruh;
            }
        }
    }

    var lol = document.getElementById("button").value;
    var tables = document.getElementsByTagName("table").length;

    if (lol == "Hide") {
        setcell("0");
        document.getElementById("button").value = "Show";
    } else {
        setcell("revert");
        document.getElementById("button").value = "Hide";
    }
}