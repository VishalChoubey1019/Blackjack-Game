let cards = [1,2,3,4,5,6,7];
let sum;
let card = (cards[Math.floor(Math.random() * cards.length)])%6 + 1;
let card1,card2;
let bool = false, b=true;

function startgame()
{
    
    document.getElementById("newcard").textContent = "NEW CARD";
    
    card1 = cards[Math.floor(Math.random() * cards.length)];
    card2 = cards[Math.floor(Math.random() * cards.length)]; 
    sum = card1+card2;

    playgame();
}    
function playgame()
{
    document.getElementById("cards").textContent = "Cards: " + card1 + " and " + card2;
    document.getElementById("sum").textContent = "Sum: " + (sum);

    if(sum < 21)
    {    
        document.getElementById("message").textContent = "Do you want to draw a new card?"; 
        document.getElementById("cards").textContent = "Cards: " + card1 + " and " + card2;
        document.getElementById("sum").textContent = "Sum: " + (sum);
    }
    if(sum === 21)
    {   
        document.getElementById("message").textContent = "Wohoo! You've got a BLACKJACK!";
        document.getElementById("cards").textContent = "Cards: " + card1 + " and " + card2;
        document.getElementById("sum").textContent = "Sum: " + (sum);
        sum = card1+card2;
        sum-=card;
    }
    if(sum > 21)
    {    
        document.getElementById("message").textContent = "You're out of the game!";
    }
}

function newcard()
{
    document.getElementById("sum").textContent = "Sum: " + (sum);
    sum+=card;
    card = (cards[Math.floor(Math.random() * cards.length)])%5;    
    playgame();
}

function rules()
{
    document.getElementById("rulebox1").textContent = "If you get 21 points, you win!";
    document.getElementById("rulebox2").textContent = "This game is purely based on luck.";
    document.getElementById("rulebox4").textContent = "Your Cards will be fixed and a random number from a dice roll will be added to your count";
    document.getElementById("rulebox3").textContent = "Click on START GAME to start the game.";    
    
    var button = document.createElement("button");
    button.innerHTML = "X";
    var body = document.getElementById("ruleexit");

    if(!b)
    {
        body.textContent= "";
        b=true;
        rules();
    }
    else{
    body.appendChild(button);
    button.addEventListener ("click", function() {
    
        document.getElementById("rulebox1").textContent = "";
        document.getElementById("rulebox2").textContent = "";
        document.getElementById("rulebox3").textContent = "";
        document.getElementById("rulebox4").textContent = "";
        body.textContent = "";
        b=false;
    });
    }
    

}