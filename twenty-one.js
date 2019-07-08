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
var cards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
var wins1 = 0;
var wins2 = 0;
var wins3 = 0;
var wins4 = 0;

function deal() {
    document.getElementById("deal").disabled = true;
    dealerCards.push(getCard());
    createCard("dealer-cards", dealerCards);
    playerOneCards.push(getCard());
    createCard("player1-cards", playerOneCards);
    playerOneCards.push(getCard());
    createCard("player1-cards", playerOneCards);
    playerTwoCards.push(getCard());
    createCard("player2-cards", playerTwoCards);
    playerTwoCards.push(getCard());
    createCard("player2-cards", playerTwoCards);
    playerThreeCards.push(getCard());
    createCard("player3-cards", playerThreeCards);
    playerThreeCards.push(getCard());
    createCard("player3-cards", playerThreeCards);
    playerFourCards.push(getCard());
    createCard("player4-cards", playerFourCards);
    playerFourCards.push(getCard());
    createCard("player4-cards", playerFourCards);

    updateTotals();

    document.getElementById("hit").disabled = false;
    document.getElementById("pass").disabled = false;
    document.getElementById("player").innerHTML = "Player 1";

    checkIf21(playerOneCards);
}

function getCard() {
    var card = cards[Math.floor(Math.random() * Math.floor(13))];
    return card;
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
            createCard("player1-cards", playerOneCards);
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
            createCard("player2-cards", playerTwoCards);
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
            createCard("player3-cards", playerThreeCards);
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
            createCard("player4-cards", playerFourCards);
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
            createCard("dealer-cards", dealerCards, 1);
        }
    }

    if (parseInt(document.getElementById("dealer-value").value) > 21) {
        document.getElementById("bust-dealer").style.display = "block";
    }
    checkForWin();

    document.getElementById("deal").disabled = false;
    document.getElementById("deal").onclick = function () { reset() };
}

function createCard(player, arr) {
    var cardNumber = arr.length - 1
    var targetCard = document.getElementById(player).getElementsByClassName("card")[cardNumber];
    var formatString = player.substr(0, player.indexOf("-")) + arr.length;
    var cardRank = arr[cardNumber].toString().substring(0, 1);
    var elem = document.getElementById(formatString);
    var suit = document.createElement("img");
    var suits = randomSuit()

    targetCard.style.display = "block"

    if (cardRank == 1) {
        cardRank = "10";
    }

    if (elem.getElementsByTagName('img').length > 0) {
        document.getElementById(formatString).firstChild.src = suits;
    } else {
        suit.src = suits;
        document.getElementById(formatString).appendChild(suit);
    }

    if (suits == "images/diamond.png" || suits == "images/heart.png") {
        targetCard.getElementsByClassName("top-value")[0].style.color = "red";
        targetCard.getElementsByClassName("bottom-value")[0].style.color = "red";
    } else {
        targetCard.getElementsByClassName("top-value")[0].style.color = "black";
        targetCard.getElementsByClassName("bottom-value")[0].style.color = "black";
    }

    targetCard.getElementsByClassName("top-value")[0].innerHTML = cardRank;
    targetCard.getElementsByClassName("bottom-value")[0].innerHTML = cardRank;
}

function randomSuit() {
    var suits = ["images/clover.png", "images/diamond.png", "images/heart.png", "images/spade.png"];
    var suit = suits[Math.floor(Math.random() * Math.floor(4))];
    return suit;
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
    document.getElementById("hit").disabled = true;
    document.getElementById("pass").disabled = true;
    document.getElementById("hit").onclick = function () { hit(1) };
    document.getElementById("pass").onclick = function () { pass(1) };
    document.getElementById("bust-one").style.display = "none";
    document.getElementById("bust-two").style.display = "none";
    document.getElementById("bust-three").style.display = "none";
    document.getElementById("bust-four").style.display = "none";
    document.getElementById("bust-dealer").style.display = "none";
    for (var x = 0; x < 30; x++) {
        document.getElementsByClassName("card")[x].style.display = "none";
    }
    deal();
}

function checkForWin() {
    var dealerV = parseInt(document.getElementById("dealer-value").value);
    var oneV = parseInt(document.getElementById("player-one-value").value);
    var twoV = parseInt(document.getElementById("player-two-value").value);
    var threeV = parseInt(document.getElementById("player-three-value").value);
    var fourV = parseInt(document.getElementById("player-four-value").value);

    if (oneV > 21) {
        oneV = 0;
    }
    if (twoV > 21) {
        twoV = 0;
    }
    if (threeV > 21) {
        threeV = 0;
    }
    if (fourV > 21) {
        fourV = 0;
    }
    if (dealerV > 21) {
        dealerV = 0.5;
    }
    if (oneV > dealerV) {
        wins1++;
    }
    if (twoV > dealerV) {
        wins2++;
    }
    if (threeV > dealerV) {
        wins3++;
    }
    if (fourV > dealerV) {
        wins4++;
    }
    document.getElementById("player-one-wins").value = wins1;
    document.getElementById("player-two-wins").value = wins2;
    document.getElementById("player-three-wins").value = wins3;
    document.getElementById("player-four-wins").value = wins4; 
}