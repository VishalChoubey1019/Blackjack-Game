let cards = [2,3,4,5,6,7,8,9,10];
let dice = [1,2,3,4,5,6];
let sum;
let card = (dice[Math.floor(Math.random() * dice.length)]);
let card1,card2;
let clicked = false;
let ruleclick=true;
let begins= false, ends= false;

let player = {
    name: "Vis",
    cash: 100
}

document.getElementById("player-details").textContent = player.name + ": $" + player.cash;


function startgame()
{
    begins=true;
    ends = false;
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
        
        player.cash+=5;
        document.getElementById("player-details").textContent = player.name + ": $" + player.cash;
        
        sum = card1+card2;
        sum-=card;
        ends = true;
        begins = false;
    }
    if(sum > 21 && !ends)
    {    
        document.getElementById("message").textContent = "You're out of the game!";
        
        if(sum>21)
        player.cash-=20;
        document.getElementById("player-details").textContent = player.name + ": $" + player.cash;
        begins = false;
        ends = true
    }


    if(player.cash < 20)
    document.getElementById("message").textContent = "SAyOnArA LOL";


}

function newcard()
{
    
    if(begins && !ends)
    {
        document.getElementById("sum").textContent = "Sum: " + (sum);
        sum+=card;
        card = (dice[Math.floor(Math.random() * dice.length)]);    
        playgame();
    }
    else
    {
        begins = false;
        ends = false;
        playgame();
    }
}
function rules()
{
    document.getElementById("rulebox1").textContent = "If you get 21 points, you win!";
    document.getElementById("rulebox2").textContent = "This game is purely based on luck.";
    document.getElementById("rulebox4").textContent = "Your Cards will be fixed and a random number from a dice roll will be added to your count.";
    document.getElementById("rulebox5").textContent = "You will start with $100 and win $5 if you get a blackjack and lose $20 if you dont."
    document.getElementById("rulebox3").textContent = "Click on START GAME to start the game.";    
    
    if(!ruleclick)
    {  
        document.getElementById("rulebox1").textContent = "";
        document.getElementById("rulebox2").textContent = "";
        document.getElementById("rulebox4").textContent = "";
        document.getElementById("rulebox3").textContent = "";
        document.getElementById("rulebox5").textContent = "";

        ruleclick = true;
        clicked = true;
    }
    if(!clicked)
    {   
        ruleclick = false;
    }
    clicked = false;
}

