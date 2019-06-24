var dealerCards = [];
var playerOneCards = [];
var playerTwoCards = [];
var playerThreeCards = [];
var playerFourCards = [];
var dealerCardsValue = 0;
var playerOneValue = 0;
var playerTwoValue = 0;
var playerThreeValue = 0;
var playerFourValue = 0;

function deal() {
    document.getElementById("deal").disabled = true;
    dealerCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerOneCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerTwoCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerThreeCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerFourCards.push(convertCard(randomCard()), convertCard(randomCard()));

    updateTotals();
    updateCards(2, 0);
    updateCards(2, 1);
    updateCards(2, 2);
    updateCards(2, 3);
    updateCards(2, 4);


    for (var x = 0; x < 7; x++) {
        if (parseInt(document.getElementById("dealer-value").value) < 17) {
            console.log(document.getElementById("dealer-value").value)
            dealerCards.push(convertCard(randomCard()));
            updateTotals();
            updateCards(1, 0);
        }
    }

    document.getElementById("hit1").disabled = false;
    document.getElementById("pass1").disabled = false;

    checkIf21(playerOneCards);
}

function randomCard() {
    return Math.floor(Math.random() * Math.floor(13));
}

function convertCard(x) {
    var card;
    switch (x) {
        case 0:
            card = "Ace";
            break;

        case 1:
            card = 2;
            break;

        case 2:
            card = 3;
            break;

        case 3:
            card = 4;
            break;

        case 4:
            card = 5;
            break;

        case 5:
            card = 6;
            break;

        case 6:
            card = 7;
            break;

        case 7:
            card = 8;
            break;

        case 8:
            card = 9;
            break;

        case 9:
            card = 10;
            break;

        case 10:
            card = "Jack";
            break;

        case 11:
            card = "Queen";
            break;

        case 12:
            card = "King";
            break;
        default:
            break;
    }
    return card;
}

function getValue(x) {
    var card;
    switch (x) {
        case "Ace":
            card = 11;
            break;

        case 2:
            card = 2;
            break;

        case 3:
            card = 3;
            break;

        case 4:
            card = 4;
            break;

        case 5:
            card = 5;
            break;

        case 6:
            card = 6;
            break;

        case 7:
            card = 7;
            break;

        case 8:
            card = 8;
            break;

        case 9:
            card = 9;
            break;

        case 10:
            card = 10;
            break;

        case "Jack":
            card = 10;
            break;

        case "Queen":
            card = 10;
            break;

        case "King":
            card = 10;
            break;
        default:
            break;
    }
    return parseInt(card);
}

function updateCards(y, z) {
    switch (z) {
        case 0:
            document.getElementById("dealer").value = "";
            for (var x = 0; x < dealerCards.length; x++) {
                document.getElementById("dealer").value += dealerCards[x] + " ";
            }
            var dealerCardsBefore = dealerCards.length - y;
            if (dealerCardsBefore > dealerCards.length) {
                dealerCards.shift(dealerCardsBefore);
            }
            break;

        case 1:
            document.getElementById("player-one").value = "";
            for (var x = 0; x < playerOneCards.length; x++) {
                document.getElementById("player-one").value += playerOneCards[x] + " ";
            }
            var cardsBefore1 = playerOneCards.length - y;
            if (cardsBefore1 > cardsBefore1.length) {
                playerOneCards.shift(cardsBefore1);
            }
            break;

        case 2:
            document.getElementById("player-two").value = "";
            for (var x = 0; x < playerTwoCards.length; x++) {
                document.getElementById("player-two").value += playerTwoCards[x] + " ";
            }
            var cardsBefore2 = playerTwoCards.length - y;
            if (cardsBefore2 > cardsBefore2.length) {
                playerTwoCards.shift(cardsBefore2);
            }
            break;
        case 3:
            document.getElementById("player-three").value = "";
            for (var x = 0; x < playerThreeCards.length; x++) {
                document.getElementById("player-three").value += playerThreeCards[x] + " ";
            }
            var cardsBefore3 = playerThreeCards.length - y;
            if (cardsBefore3 > cardsBefore3.length) {
                playerThreeCards.shift(cardsBefore3);
            }
        case 4:
            document.getElementById("player-four").value = "";
            for (var x = 0; x < playerFourCards.length; x++) {
                document.getElementById("player-four").value += playerFourCards[x] + " ";
            }
            var cardsBefore4 = playerFourCards.length - y;
            if (cardsBefore4 > cardsBefore4.length) {
                playerFourCards.shift(cardsBefore4);
            }
        default:
            break;
    }
}

function updateTotals() {

    var dealerCardsValue = 0;
    var playerOneValue = 0;
    var playerTwoValue = 0;
    var playerThreeValue = 0;
    var playerFourValue = 0;

    for (var x = 0; x < dealerCards.length; x++) {
        dealerCardsValue += getValue(dealerCards[x]);
        document.getElementById("dealer-value").value = dealerCardsValue;
    }

    for (var x = 0; x < playerOneCards.length; x++) {
        playerOneValue += getValue(playerOneCards[x]);
        document.getElementById("player-one-value").value = playerOneValue;
    }

    for (var x = 0; x < playerTwoCards.length; x++) {
        playerTwoValue += getValue(playerTwoCards[x]);
        document.getElementById("player-two-value").value = playerTwoValue;
    }

    for (var x = 0; x < playerThreeCards.length; x++) {
        playerThreeValue += getValue(playerThreeCards[x]);
        document.getElementById("player-three-value").value = playerThreeValue;
    }

    for (var x = 0; x < playerFourCards.length; x++) {
        playerFourValue += getValue(playerFourCards[x]);
        document.getElementById("player-four-value").value = playerFourValue;
    }
}

function hit(x) {
    switch (x) {
        case 1:
            playerOneCards.push(convertCard(randomCard()));
            updateCards(1, 1);
            updateTotals();
            if (parseInt(document.getElementById("player-one-value").value) > 21) {
                document.getElementById("hit1").disabled = true;
                document.getElementById("pass1").disabled = true;
                document.getElementById("hit2").disabled = false;
                document.getElementById("pass2").disabled = false;
            } else if (parseInt(document.getElementById("player-one-value").value) == 21) {
                document.getElementById("hit1").disabled = true;
                document.getElementById("pass1").disabled = true;
                document.getElementById("hit2").disabled = false;
                document.getElementById("pass2").disabled = false;
            }
            checkIf21(playerTwoCards);
            break;

        case 2:
            playerTwoCards.push(convertCard(randomCard()));
            updateCards(1, 2);
            updateTotals();
            if (parseInt(document.getElementById("player-two-value").value) > 21) {
                document.getElementById("hit2").disabled = true;
                document.getElementById("pass2").disabled = true;
                document.getElementById("hit3").disabled = false;
                document.getElementById("pass3").disabled = false;

            } else if (parseInt(document.getElementById("player-two-value").value) == 21) {
                document.getElementById("hit2").disabled = true;
                document.getElementById("pass2").disabled = true;
                document.getElementById("hit3").disabled = false;
                document.getElementById("pass3").disabled = false;

            }
            checkIf21(playerThreeCards);
            break;

        case 3:
            playerThreeCards.push(convertCard(randomCard()));
            updateCards(1, 3);
            updateTotals();
            if (parseInt(document.getElementById("player-three-value").value) > 21) {
                document.getElementById("hit3").disabled = true;
                document.getElementById("pass3").disabled = true;
                document.getElementById("hit4").disabled = false;
                document.getElementById("pass4").disabled = false;
            } else if (parseInt(document.getElementById("player-three-value").value) == 21) {
                document.getElementById("hit3").disabled = true;
                document.getElementById("pass3").disabled = true;
                document.getElementById("hit4").disabled = false;
                document.getElementById("pass4").disabled = false;
            }
            checkIf21(playerFourCards);
            break;

        case 4:
            playerFourCards.push(convertCard(randomCard()));
            updateCards(1, 4);
            updateTotals();
            if (parseInt(document.getElementById("player-four-value").value) > 21) {
                document.getElementById("hit4").disabled = true;
                document.getElementById("pass4").disabled = true;
            } else if (parseInt(document.getElementById("player-four-value").value) == 21) {
                document.getElementById("hit4").disabled = true;
                document.getElementById("pass4").disabled = true;
            }
            break;
        default:
            break;
    }
}

function pass(x) {
    switch (x) {
        case 1:
            document.getElementById("hit1").disabled = true;
            document.getElementById("pass1").disabled = true;
            document.getElementById("hit2").disabled = false;
            document.getElementById("pass2").disabled = false;
            checkIf21(playerTwoCards);
            break;
        case 2:
            document.getElementById("hit2").disabled = true;
            document.getElementById("pass2").disabled = true;
            document.getElementById("hit3").disabled = false;
            document.getElementById("pass3").disabled = false;
            checkIf21(playerThreeCards);
            break;
        case 3:
            document.getElementById("hit3").disabled = true;
            document.getElementById("pass3").disabled = true;
            document.getElementById("hit4").disabled = false;
            document.getElementById("pass4").disabled = false;
            checkIf21(playerFourCards);
            break;
        case 4:
            document.getElementById("hit4").disabled = true;
            document.getElementById("pass4").disabled = true;
            break;
        default:
            break;
    }
}

function checkIf21(arr) {
    switch (arr) {
        case playerOneCards:
            if (document.getElementById("player-one-value").value == 21) {
                document.getElementById("hit1").disabled = true;
                document.getElementById("pass1").disabled = true;
                document.getElementById("hit2").disabled = false;
                document.getElementById("pass2").disabled = false;
            }
            break;

        case playerTwoCards:
            if (document.getElementById("player-two-value").value == 21) {
                document.getElementById("hit2").disabled = true;
                document.getElementById("pass2").disabled = true;
                document.getElementById("hit3").disabled = false;
                document.getElementById("pass3").disabled = false;
            }
            break;

        case playerThreeCards:
            if (document.getElementById("player-three-value").value == 21) {
                document.getElementById("hit3").disabled = true;
                document.getElementById("pass3").disabled = true;
                document.getElementById("hit4").disabled = false;
                document.getElementById("pass4").disabled = false;
            }
            break;

        case playerFourCards:
            if (document.getElementById("player-four-value").value == 21) {
                document.getElementById("hit4").disabled = true;
                document.getElementById("pass4").disabled = true;
            }
            break;
    }
}