# unit-4-game
HW4 Crystal Game - Match the given number by clicking the gem stones.

Jumbotron, Card and Buttons were used for main game display.

$(document).ready(function () {}); was used for the initial HTML loading before javascript starts running.

$("#id").on("click", function() {}); was used for accepting crystal clicking event.

Math.floor(Math.random() * N) + n; was used to generate a random number between n and N - 1 + n.

Game runs in permanent loop.

In every winning or losing moment, crystal clicking is disabled in order to ask user to start over or continue another round.  Once either key is clicked, crystal clicking becomes available again.

initialize(); works as a hard reset for resetting all variables and arrays.

anotherRound(); works as a soft reset for resetting all variables and arrays except win and lose counters.