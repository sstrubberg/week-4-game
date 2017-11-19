var counter = 0;
var winningNumber = Math.floor(Math.random() * 120) + 19;
var greenGemValue = Math.floor(Math.random() * 12) + 1;
var blueGemValue = Math.floor(Math.random() * 12) + 1;
var orangeGemValue = Math.floor(Math.random() * 12) + 1;
var purpleGemValue = Math.floor(Math.random() * 12) + 1;
var win = 0;
var loss = 0;
var imageCrystal;
var gemObject = [ 
    {
        gem: greenGemValue,
        img: src="assets/images/greengem.png"
    },
    {
        gem: blueGemValue,
        img: src="assets/images/bluegem.png"
    },
    {
        gem: orangeGemValue,
        img: src="assets/images/orangegem.png"
    },
    {
        gem: purpleGemValue,
        img: src="assets/images/purplegem.png"
    },
    ];
$("#numberToGuess").text(winningNumber);

$(document).ready(function() {

for (var i=0; i < gemObject.length; i++) {
    imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", gemObject[i].img);
    imageCrystal.attr("data-crystal-value", gemObject[i].gem);
    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click",function() {
    var crystalValue = ($(this).attr("data-crystal-value"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#yourScore").text(counter);
    winChecker();
    loseChecker();
});

function winChecker() {
    if (counter === winningNumber) {
        $(".winner").text("You won!");
        // alert("You won!");
        win += 1;
        $("#winCounter").text(win);
        reset();
    }
}

function loseChecker() {
    if (counter > winningNumber) {
        $(".loser").text("You lost!");
        // alert("You lost!");
        loss += 1;
        $("#loseCounter").text(loss);
        reset();
    }
}

function gameOverState() {
    
}

function reset() {
    counter = 0;
    winningNumber = Math.floor(Math.random() * 120) + 19;
    $("#numberToGuess").text(winningNumber);
    // $(".winner").text("Good Luck!");
    // $(".loser").text("Good Luck!");

}





});
