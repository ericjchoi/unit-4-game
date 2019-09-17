/* HW4 Crystal Game - Match the given number by clicking the gem stones. */
var targetNumber = 0;
var sum = 0;
var gem = [];
var keyLock = false;
var win = 0;
var lose = 0;
/* functions */
function initialize() {
    /* generate random target number between 19 and 120 */
    targetNumber = Math.floor(Math.random() * 102) + 19;
    /* assigning non-overlapping random numbers to gems between 1 and 12 */
    for (var i = 0; i < 5; i++) {
        gem[i] = Math.floor(Math.random() * 11) + 1;
    }
    for (var j = 0; j < 4; j++) {
        for (var k = j + 1; k < 5; k++) {
            if (gem[j] === gem[k]) {
                do {
                    gem[k] = Math.floor(Math.random() * 11) + 1;
                } while (gem[j] === gem[k])
            }
        }
    }
    /* reset counters */
    win = 0;
    lose = 0;
    sum = 0;
    keyLock = false;
    /* initialize display */
    document.getElementById("win").innerHTML = win;
    document.getElementById("lose").innerHTML = lose;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("targetNumber").innerHTML = targetNumber;
    document.getElementById("message").innerHTML = "Good Luck!!";
    document.getElementById("startOver").innerHTML = "Start Over";
    $("#continueBtn").hide();
}
function checkWin() {
    if (targetNumber === sum) {
        document.getElementById("win").innerHTML = ++win;
        document.getElementById("message").innerHTML = "You Won!!";
        keyLock = true;
        $("#continueBtn").show();
    }
}
function checkLose() {
    if (targetNumber < sum) {
        document.getElementById("lose").innerHTML = ++lose;
        document.getElementById("message").innerHTML = "You Lost!!";
        keyLock = true;
        $("#continueBtn").show();
    }
}
function anotherRound() {
    /* generate random target number between 19 and 120 */
    targetNumber = Math.floor(Math.random() * 102) + 19;
    /* assigning non-overlapping random numbers to gems between 1 and 12 */
    for (var i = 0; i < 5; i++) {
        gem[i] = Math.floor(Math.random() * 11) + 1;
    }
    for (var j = 0; j < 4; j++) {
        for (var k = j + 1; k < 5; k++) {
            if (gem[j] === gem[k]) {
                do {
                    gem[k] = Math.floor(Math.random() * 11) + 1;
                } while (gem[j] === gem[k])
            }
        }
    }
    /* reset counters but keeps win and lose status */
    sum = 0;
    keyLock = false;
    /* initialize display */
    document.getElementById("win").innerHTML = win;
    document.getElementById("lose").innerHTML = lose;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("targetNumber").innerHTML = targetNumber;
    document.getElementById("message").innerHTML = "Good Luck!!";
    document.getElementById("startOver").innerHTML = "Start Over";
    $("#continueBtn").hide();
}
function game() {
    $(".gem0").on("click", function () {
        if (keyLock === false) {
            sum += gem[0];
            document.getElementById("sum").innerHTML = sum;
            checkWin();
            checkLose();
        }
    });
    $(".gem1").on("click", function () {
        if (keyLock === false) {
            sum += gem[1];
            document.getElementById("sum").innerHTML = sum;
            checkWin();
            checkLose();
        }
    });
    $(".gem2").on("click", function () {
        if (keyLock === false) {
            sum += gem[2];
            document.getElementById("sum").innerHTML = sum;
            checkWin();
            checkLose();
        }
    });
    $(".gem3").on("click", function () {
        if (keyLock === false) {
            sum += gem[3];
            document.getElementById("sum").innerHTML = sum;
            checkWin();
            checkLose();
        }
    });
    $(".gem4").on("click", function () {
        if (keyLock === false) {
            sum += gem[4];
            document.getElementById("sum").innerHTML = sum;
            checkWin();
            checkLose();
        }
    });
    $("#startOver").on("click", function () {
        initialize();
    });
    $("#continueBtn").on("click", function () {
        anotherRound();
    });
}
/* main game loop */
$(document).ready(function () {
    initialize();
    game();
});
