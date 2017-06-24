$(document).ready(function () {

    // Game setup
    var diamondValue = 0;
    var emeraldValue = 0;
    var rubyValue = 0;
    var sapphireValue = 0;
    var finalNumber = 0;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    // Initialize finalNumber
    function initializeFinalNumber() {
        finalNumber = Math.floor(Math.random() * 120) + 19;
        console.log(finalNumber);
        var finalNumberSpan = $("<span>");
        $(finalNumberSpan).text(finalNumber);
        $("#final-number").append(finalNumberSpan);
    }

    // Randomize gem values
    function randomizeGemValues() {
        diamondValue = Math.floor(Math.random() * 12) + 1;
        emeraldValue = Math.floor(Math.random() * 12) + 1;
        rubyValue = Math.floor(Math.random() * 12) + 1;
        sapphireValue = Math.floor(Math.random() * 12) + 1;
    }

    function resetGame() {
        $("#final-number").empty();
        initializeFinalNumber();
        totalScore = 0;
        $("#your-total-number").text(totalScore);
        randomizeGemValues();
    }

    function announceWin() {
        alert("Congratulations! You win!");
        resetGame();

    }

    function announceLoss() {
        alert("You went over the number! You lose!");
        resetGame();
    }

    function evaluateGameStatus() {
        if (totalScore == finalNumber) {
            wins += 1;
            // Incrememnt Wins: span
            var winsSpan = $("<span>");
            $(winsSpan).text(wins);
            $("#wins-count").empty();
            $("#wins-count").append(winsSpan);
            setTimeout(announceWin, 0);
        } else if (totalScore > finalNumber) {
            losses += 1;
            // Incrememnt Losses: span
            var lossesSpan = $("<span>");
            $(lossesSpan).text(losses);
            $("#losses-count").empty();
            $("#losses-count").append(lossesSpan);
            setTimeout(announceLoss, 0);
            
        }
    }

    // Run game
    initializeFinalNumber();
    randomizeGemValues();

    // Setup click listeners
    // On diamond click, add diamond value to total score
    $("#diamond").on("click", function () {
        totalScore += diamondValue;
        $("#your-total-number").text(totalScore);
        evaluateGameStatus();
    });

    // On emerald click, add emerald value to total score
    $("#emerald").on("click", function () {
        totalScore += emeraldValue;
        $("#your-total-number").text(totalScore);
        evaluateGameStatus();
    });

    // On ruby click, add ruby value to total score
    $("#ruby").on("click", function () {
        totalScore += rubyValue;
        $("#your-total-number").text(totalScore);
        evaluateGameStatus();
    });

    // On sapphire click, add sapphire value to total score
    $("#sapphire").on("click", function () {
        totalScore += sapphireValue;
        $("#your-total-number").text(totalScore);
        evaluateGameStatus();
    });

});

