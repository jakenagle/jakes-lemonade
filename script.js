confirm("Welcome to Jake's Lemonade! You have started with 45 dollars. Lemons cost 1 dollar, sugar costs 1 dollar, and cups cost 1 dollar. You need one of each supply for a cup of lemonade. Click OK to play!"); 
var amountLemons = prompt("how many lemons would you like to buy?");
if (amountLemons > 45) {
    confirm("you cannot buy that many lemons! You only have 45 dollars to spend, and lemons cost 1 dollar apiece.");
    var amountLemons = prompt("how many lemons would you like to buy?");
} else if (amountLemons > 43) {
confirm("You cannot buy that many lemons! You won't have any money to buy enough cups or sugar to make any lemonade, and won't be able to play the game.");
var amountLemons = prompt("how many lemons would you like to buy?");
}
var amountCups = prompt("how many cups would you like to buy?");
if (amountCups > 45 - amountLemons) {
    confirm("you cannot buy that many cups! You only have 45 dollars to spend, and cups cost 1 dollar apiece.");
    var amountCups = prompt("how many cups would you like to buy?");
} else if (amountLemons > 45 - amountLemons - 1) {
confirm("You cannot buy that many cups! You won't have any money to buy enough lemons or sugar to make any lemonade, and won't be able to play the game.");
var amountCups = prompt("how many cups would you like to buy?");
}
var amountSugar = prompt("how much sugar would you like to buy?");
if (amountSugar > 45 - amountCups - amountLemons) {
    confirm("you cannot buy that much sugar! You only have 45 dollars to spend, and sugar costs 1 dollar apiece.");
    var amountSugar = prompt("how much sugar would you like to buy?");
}
var money = 45 - amountLemons - amountCups - amountSugar;
if (money >= 0) {
    confirm ("Great! you have started with " + amountLemons + " lemons, " + amountCups + " cups, and " + amountSugar + " sugar.");
    var finalDay = prompt ("How many days would you like for your lemonade game to last?");
    var lemonadePrice = prompt ("One last thing before you start selling lemonade- how much will your lemonade cost per cup? Remember, too high of a price for lemonade will drive away customers, and too low of a price will not let you make any money.");
} else {
    confirm ("Unfortunately, there has been an error. Please reload the page.");
}
while (isNaN(lemonadePrice)) {
    confirm("Uh-oh! You didn't use a number for the price of your lemonade! Please try again, but only using numbers- don't write 'dollars', 'cents' or '$'");
    prompt ("One last thing before you start selling lemonade- how much will your lemonade cost per cup? Remember, too high of a price for lemonade will drive away customers, and too low of a price will not let you make any money.");
}
while (lemonadePrice === 0) {
    confirm("Uh-oh! You set your lemonade price to free, meaning you can't make any money! Please set your lemonade price to at least .01.");
    lemonadePrice = prompt("How much will your lemonade cost per cup? Remember, too high of a price for lemonade will drive away customers, and too low of a price will not let you make any money.");
} 
var dailyMoney = 0;
var day = 1; 
var totalMoney = 0; 
var dailyMoney = 0;
for (var i = 0; i <= finalDay; i++) {
var dailyMoney = 0;
var dailySales = 0;
var weatherChooser = Math.floor(Math.random()*10);
console.log(weatherChooser); 
dailySales = 10;
var weather = "normal";
if (weatherChooser <= 3) {
    weather = "stormy";
    dailySales -= 5;
} else if (weatherChooser <= 9 && weatherChooser >= 6) {
    weather = "beautiful";
    dailySales += 5;
} 
if (lemonadePrice <= 0.50) {
     dailySales += 5;
} else if (lemonadePrice <= 1) {
     dailySales += 0;
}
else if (lemonadePrice <= 2) {
     dailySales -= 10;
} else if (lemonadePrice > 3) {
     dailySales = 0;
}
while (amountLemons < dailySales || amountSugar < dailySales || amountCups < dailySales) {
    if (amountLemons < amountSugar && amountLemons < amountCups) {
        dailySales = amountLemons;
    } else if (amountSugar < amountLemons && amountSugar < amountCups) {
        dailySales = amountSugar;
    } else {
        dailySales = amountCups;
    }
}
if (lemonadePrice < 1 && lemonadePrice !== 0) {
    dailyMoney = dailySales / lemonadePrice;
} else {
    dailyMoney = dailySales * lemonadePrice; 
}
totalMoney += dailyMoney;
amountLemons -= dailySales;
amountCups -= dailySales;
amountSugar -= dailySales;
    if (day === 1) {
        confirm ("You completed day " + day + "! Today, the weather was " + weather + ". Your daily sales added up to $" + dailyMoney + ". You now have " + amountLemons + " lemons, " + amountCups + " cups, and " + amountSugar + " sugar.");
        var lemonsBought = prompt("You have " + totalMoney + " money, and " + amountLemons + " lemons. How many more would you like to buy?");
        amountLemons = Math.round(amountLemons) + Math.round(lemonsBought);
        totalMoney = Math.round(totalMoney * 100) / 100 - Math.round(lemonsBought * 100) / 100;
        var cupsBought = prompt ("You have " + totalMoney + " money, and " + amountCups + " cups. How many more would you like to buy?");
        amountCups = Math.round(amountCups) + Math.round(cupsBought);
        totalMoney = Math.round(totalMoney * 100) / 100 - Math.round(cupsBought * 100) / 100;
        var sugarBought = prompt ("You have " + totalMoney + " money, and " + amountSugar + " sugar. How many more would you like to buy?");
       amountSugar = Math.round(amountSugar) + Math.round(sugarBought);
        totalMoney =Math.round(totalMoney * 100) / 100 - Math.round(sugarBought * 100) / 100;
    } else {
        confirm ("You completed day " + day + "! Today, the weather was " + weather + ". Your daily sales added up to $" + dailyMoney + ", and your total sales added up to " + totalMoney + ". You now have " + amountLemons + " lemons, " + amountCups + " cups, and " + amountSugar + " sugar.");
        var lemonsBought = prompt("You have " + totalMoney + " money, and " + amountLemons + " lemons. How many more would you like to buy?");
        amountLemons = Math.round(amountLemons) + Math.round(lemonsBought);
        totalMoney = Math.round(totalMoney * 100) / 100 - Math.round(lemonsBought * 100) / 100;
        var cupsBought = prompt ("You have " + totalMoney + " money, and " + amountCups + " cups. How many more would you like to buy?");
        amountCups = Math.round(amountCups) + Math.round(cupsBought);
        totalMoney = Math.round(totalMoney * 100) / 100 - Math.round(cupsBought * 100) / 100;
        var sugarBought = prompt ("You have " + totalMoney + " money, and " + amountSugar + " sugar. How many more would you like to buy?");
       amountSugar = Math.round(amountSugar) + Math.round(sugarBought);
        totalMoney =Math.round(totalMoney * 100) / 100 - Math.round(sugarBought * 100) / 100;
    }
    if (day === finalDay) {
    } else {
var lemonadePrice2 = prompt ("Would you like to change your lemonade price?");
if(!isNaN(lemonadePrice2)) {
    lemonadePrice = lemonadePrice2;
}
}
day++;
}
confirm ("Congradulations! You finished day " + finalDay + " ! That means you finished the game!");
