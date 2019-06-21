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
    debugger
    document.getElementById("deal").disabled = true;
    dealerCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerOneCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerTwoCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerThreeCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerFourCards.push(convertCard(randomCard()), convertCard(randomCard()));

    for (var x = 0; x < 2; x++) {
        document.getElementById("dealer").value += dealerCards[x] + " ";
    }

    for (var x = 0; x < 2; x++) {
        document.getElementById("player-one").value += playerOneCards[x] + " ";
    }

    for (var x = 0; x < 2; x++) {
        document.getElementById("player-two").value += playerTwoCards[x] + " ";
    }

    for (var x = 0; x < 2; x++) {
        document.getElementById("player-three").value += playerThreeCards[x] + " ";
    }

    for (var x = 0; x < 2; x++) {
        document.getElementById("player-four").value += playerFourCards[x] + " ";
    }

    updateTotals();
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
    }
    return card;
}

function getValue(x) {
    var card;
    switch (x) {
        case "Ace":
            if (dealerCardsValue > 10) {
                card = 1;
            } else {
                card = 11;
            }
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
    }
    return parseInt(card);
}

function addTotals(x, y) {
    return x + y;
}

function updateTotals() {
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
    switch(x) {
        case "1":
        playerOneCards.push(convertCard(randomCard()));
        document.createElement("input");
        break;

    }
}