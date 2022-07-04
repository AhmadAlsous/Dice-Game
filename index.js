if (window.performance.navigation.type === 1) {
    rollDice();
  }
function rollDice(){
    var randomNumber1=Math.floor(Math.random()*6)+1;
    var randomImg1="images/dice"+randomNumber1+".png";
    document.querySelector(".img1").setAttribute("src",randomImg1);
    var randomNumber2=Math.floor(Math.random()*6)+1;
    var randomImg2="images/dice"+randomNumber2+".png";
    document.querySelector(".img2").setAttribute("src",randomImg2);
    if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
    }else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
    }else{
        document.querySelector("h1").innerHTML="Draw!";
    }
}