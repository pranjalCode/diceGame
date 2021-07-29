var randomNumber = Math.floor(Math.random() *6) +1;
var randomImage = "dice" + randomNumber + ".png";
var ImageSource = randomImage;
var image = document.querySelectorAll("img")[0].setAttribute("src" , ImageSource);


var randomNumber2 = Math.floor(Math.random() *6) +1;
var randomImage2 = "dice" + randomNumber2 +".png";
var ImageSource2 = randomImage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src" , ImageSource2);


if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = " Hurrah!!!!     Player 1 Won.";
}
else if(randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = " Hurrah!!!!     Player 2 Won.";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}


document.addEventListener("keypress", function(){
    alert("key was pressed!!!!1");
});
