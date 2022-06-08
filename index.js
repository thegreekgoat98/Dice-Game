//Dice 1
var randomnumber1=Math.floor(Math.random()*6)+1
var randomdiceimage="dice"+randomnumber1+".png" //dice4.png
var randomdiceimagesource="images/"+randomdiceimage //images/dice4.png
var image1=document.querySelectorAll("img")[0]
image1.setAttribute("src",randomdiceimagesource)


//Dice 2
var randomnumber2=Math.floor(Math.random()*6)+1
var randomdiceimage="dice"+randomnumber2+".png" //dice4.png
var randomdiceimagesource="images/"+randomdiceimage //images/dice4.png
var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src",randomdiceimagesource)


if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins."
    document.querySelector("title").innerHTML="PLAYER 1 WINS🔥🔥"
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins."
    document.querySelector("title").innerHTML="PLAYER 2 WINS🔥🔥"
}
else
{
    document.querySelector("h1").innerHTML="That's a draw"
    document.querySelector("title").innerHTML="THAT's A DRAW 🥱🥱"
}



