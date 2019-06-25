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
var cards = ["Ace", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

function deal() {
    document.getElementById("deal").disabled = true;
    dealerCards.push(getCard());
    playerOneCards.push(getCard(), getCard());
    playerTwoCards.push(getCard(), getCard());
    playerThreeCards.push(getCard(), getCard());
    playerFourCards.push(getCard(), getCard());

    updateTotals();
    updateCards(2, 0);
    updateCards(2, 1);
    updateCards(2, 2);
    updateCards(2, 3);
    updateCards(2, 4);

    document.getElementById("hit").disabled = false;
    document.getElementById("pass").disabled = false;
    document.getElementById("player").innerHTML = "Player 1";

    checkIf21(playerOneCards);
}

function getCard() {
    var card = cards[Math.floor(Math.random() * Math.floor(13))];
    return card;
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

function getHandValue(array) {
    var total = 0;
    var aceCount = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "Ace") {
            total += 1;
            aceCount++;
        } else if (array[i] == "King" || array[i] == "Queen" || array[i] == "Jack") {
            total += 10;
        } else {
            total += array[i];
        }
    }

    for (var i = 0; i < aceCount; i++) {
        if (total + 10 <= 21) {
            total += 10;
        }
    }
    return total;
}

function updateTotals() {
    document.getElementById("dealer-value").value = getHandValue(dealerCards);
    document.getElementById("player-one-value").value = getHandValue(playerOneCards);
    document.getElementById("player-two-value").value = getHandValue(playerTwoCards);
    document.getElementById("player-three-value").value = getHandValue(playerThreeCards);
    document.getElementById("player-four-value").value = getHandValue(playerFourCards);
}

function hit(x) {
    switch (x) {
        case 1:
            playerOneCards.push(getCard());
            updateCards(1, 1);
            updateTotals();
            if (parseInt(document.getElementById("player-one-value").value) > 21) {
                document.getElementById("hit").onclick = function () { hit(2) };
                document.getElementById("pass").onclick = function () { pass(2) };
                document.getElementById("player").innerHTML = "Player 2";
                document.getElementById("bust-one").style.display = "block";
            } else if (parseInt(document.getElementById("player-one-value").value) == 21) {
                document.getElementById("hit").onclick = function () { hit(2) };
                document.getElementById("pass").onclick = function () { pass(2) };
                document.getElementById("player").innerHTML = "Player 2";
            }
            checkIf21(playerTwoCards);
            break;

        case 2:
            playerTwoCards.push(getCard());
            updateCards(1, 2);
            updateTotals();
            if (parseInt(document.getElementById("player-two-value").value) > 21) {
                document.getElementById("hit").onclick = function () { hit(3) };
                document.getElementById("pass").onclick = function () { pass(3) };
                document.getElementById("player").innerHTML = "Player 3";
                document.getElementById("bust-two").style.display = "block";
            } else if (parseInt(document.getElementById("player-two-value").value) == 21) {
                document.getElementById("hit").onclick = function () { hit(3) };
                document.getElementById("pass").onclick = function () { pass(3) };
                document.getElementById("player").innerHTML = "Player 3";
            }
            checkIf21(playerThreeCards);
            break;

        case 3:
            playerThreeCards.push(getCard());
            updateCards(1, 3);
            updateTotals();
            if (parseInt(document.getElementById("player-three-value").value) > 21) {
                document.getElementById("hit").onclick = function () { hit(4) };
                document.getElementById("pass").onclick = function () { pass(4) };
                document.getElementById("player").innerHTML = "Player 4";
                document.getElementById("bust-three").style.display = "block";
            } else if (parseInt(document.getElementById("player-three-value").value) == 21) {
                document.getElementById("hit").onclick = function () { hit(4) };
                document.getElementById("pass").onclick = function () { pass(4) };
                document.getElementById("player").innerHTML = "Player 4";
            }
            checkIf21(playerFourCards);
            break;

        case 4:
            playerFourCards.push(getCard());
            updateCards(1, 4);
            updateTotals();
            if (parseInt(document.getElementById("player-four-value").value) > 21) {
                document.getElementById("hit").disabled = true;
                document.getElementById("pass").disabled = true;
                document.getElementById("bust-four").style.display = "block";
                document.getElementById("player").innerHTML = "Dealer";
                dealerHit();
            } else if (parseInt(document.getElementById("player-four-value").value) == 21) {
                document.getElementById("hit").disabled = true;
                document.getElementById("pass").disabled = true;
                document.getElementById("player").innerHTML = "Dealer";
                dealerHit();
            }
            break;
        default:
            break;
    }
}

function pass(x) {
    switch (x) {
        case 1:
            document.getElementById("hit").onclick = function () { hit(2) };
            document.getElementById("pass").onclick = function () { pass(2) };
            document.getElementById("player").innerHTML = "Player 2";
            checkIf21(playerTwoCards);
            break;
        case 2:
            document.getElementById("hit").onclick = function () { hit(3) };
            document.getElementById("pass").onclick = function () { pass(3) };
            document.getElementById("player").innerHTML = "Player 3";
            checkIf21(playerThreeCards);
            break;
        case 3:
            document.getElementById("hit").onclick = function () { hit(4) };
            document.getElementById("pass").onclick = function () { pass(4) };
            document.getElementById("player").innerHTML = "Player 4";
            checkIf21(playerFourCards);
            break;
        case 4:
            document.getElementById("hit").disabled = true;
            document.getElementById("pass").disabled = true;
            document.getElementById("player").innerHTML = "Dealer";
            dealerHit();
            break;
        default:
            break;
    }
}

function checkIf21(arr) {
    switch (arr) {
        case playerOneCards:
            if (document.getElementById("player-one-value").value == 21) {
                document.getElementById("hit").onclick = function () { hit(2) };
                document.getElementById("pass").onclick = function () { pass(2) };
                document.getElementById("player").innerHTML = "Player 2";
            }
            break;

        case playerTwoCards:
            if (document.getElementById("player-two-value").value == 21) {
                document.getElementById("hit").onclick = function () { hit(3) };
                document.getElementById("pass").onclick = function () { pass(3) };
                document.getElementById("player").innerHTML = "Player 3";
            }
            break;

        case playerThreeCards:
            if (document.getElementById("player-three-value").value == 21) {
                document.getElementById("hit").onclick = function () { hit(4) };
                document.getElementById("pass").onclick = function () { pass(4) };
                document.getElementById("player").innerHTML = "Player 4";
            }
            break;

        case playerFourCards:
            if (document.getElementById("player-four-value").value == 21) {
                document.getElementById("hit").disabled = true;
                document.getElementById("pass").disabled = true;
                document.getElementById("player").innerHTML = "Dealer";
                dealerHit();
            }
            break;
        default:
            break;
    }
}

function dealerHit() {
    for (var x = 0; x < 7; x++) {
        if (parseInt(document.getElementById("dealer-value").value) < 17) {
            dealerCards.push(getCard());
            updateTotals();
            updateCards(1, 0);
        }
    }

    if (parseInt(document.getElementById("dealer-value").value) > 21) {
        document.getElementById("bust-dealer").style.display = "block";
    }

    document.getElementById("deal").disabled = false;
    document.getElementById("deal").onclick = function () { reset() };
}

function randomSuit() {
    var suit = Math.floor(Math.random() * Math.floor(4));
    var suits;
    switch (suit) {
        case 0:
            suits = "Clover";
            break;

        case 1:
            suits = "Clubs";
            break;

        case 2:
            suits = "Hearts";
            break;

        case 3:
            suits = "Diamonds"
            break;
    }
    return suits;
}

function reset() {
    dealerCards = [];
    playerOneCards = [];
    playerTwoCards = [];
    playerThreeCards = [];
    playerFourCards = [];
    document.getElementById("dealer-value").value = "";
    document.getElementById("player-one-value").value = "";
    document.getElementById("player-two-value").value = "";
    document.getElementById("player-three-value").value = "";
    document.getElementById("player-four-value").value = "";
    document.getElementById("dealer").value = "";
    document.getElementById("player-one").value = "";
    document.getElementById("player-two").value = "";
    document.getElementById("player-three").value = "";
    document.getElementById("player-four").value = "";
    document.getElementById("hit").disabled = true;
    document.getElementById("pass").disabled = true;
    document.getElementById("hit").onclick = function () { hit(1) };
    document.getElementById("pass").onclick = function () { pass(1) };
    document.getElementById("bust-one").style.display = "none";
    document.getElementById("bust-two").style.display = "none";
    document.getElementById("bust-three").style.display = "none";
    document.getElementById("bust-four").style.display = "none";
    document.getElementById("bust-dealer").style.display = "none";
    deal();
}