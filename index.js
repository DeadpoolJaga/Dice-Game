var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImage1);
image2.setAttribute("src", randomImage2);
var title = document.querySelector("h1");
if(randomNumber1>randomNumber2){
  title.innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1===randomNumber2){
  title.innerHTML = "Draw!";
}
else{
  title.innerHTML = "Player 2 Wins!🚩";
}
