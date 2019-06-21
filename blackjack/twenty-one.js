var dealerCards = [];
var playerOneCards = [];
var playerTwoCards = [];
var playerThreeCards = [];
var playerFourCards = [];
var dealerCardsValue = 0;
var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function deal() {
    document.getElementById("deal").disabled = true;
    dealerCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerOneCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerTwoCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerThreeCards.push(convertCard(randomCard()), convertCard(randomCard()));
    playerFourCards.push(convertCard(randomCard()), convertCard(randomCard()));

    for (var x = 0; x < 2; x++)
    {
        document.getElementById("dealer").value += dealerCards[x] + " ";
    }

    for (var x = 0; x < 2; x++)
    {
        document.getElementById("player-one").value += playerOneCards[x] + " ";
    }

    for (var x = 0; x < 2; x++)
    {
        document.getElementById("player-two").value += playerTwoCards[x] + " ";
    }

    for (var x = 0; x < 2; x++)
    {
        document.getElementById("player-three").value += playerThreeCards[x] + " ";
    }

    for (var x = 0; x < 2; x++)
    {
        document.getElementById("player-four").value += playerFourCards[x] + " ";
    }

    for (var x = 0; x < dealerCards.length; x++)
    {
        document.getElementById("dealer-value").value = getValue(dealerCards[x]);
    }
}
// \n

function randomCard() {
    return Math.floor(Math.random() * Math.floor(13));
}

function convertCard(x) {
    var card;
    switch(x) {
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
    switch(x) {
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

function addTotals(x)
{
    
}