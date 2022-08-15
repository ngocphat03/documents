var calculation ="";
const audio = new Audio('audio.mp3');
function cl(){
    resetColor();
    calculation = "";
    document.getElementById("out").innerHTML = 0;
    audio.play();
}
function negative(){
    nega = calculation; 
    nega = nega * -1;
    calculation = nega;
    document.getElementById("out").innerHTML = calculation;
    audio.play();
}
function percent(perin){
    per = calculation;
    per = per * 0.01;
    calculation = per;
    document.getElementById("out").innerHTML = calculation;
    audio.play();
}
 function doc(){
    if(calculation==""){
        calculation = 0;
    }
    calculation += ".";
    document.getElementById("out").innerHTML = calculation;
    audio.play();
}
function num(x){
    var text = x.toString();
    calculation = calculation + text;
    document.getElementById("out").innerHTML = calculation;
    audio.play();
}
function cal(pt){
    calculation1 = calculation;
    calculation1 += pt;
    calculation = "";
    audio.play();
}
function res(){
    calculationAll = calculation1 + calculation;
    var result = eval(calculationAll);
    document.getElementById("out").innerHTML = result;
    calculation = result;
    audio.play();
}
//reset button collor
function resetColor(){
    document.getElementById("addition").style.backgroundColor = "#fea00c";
    document.getElementById("subtraction").style.backgroundColor = "#fea00c";
    document.getElementById("multiplication").style.backgroundColor = "#fea00c";
    document.getElementById("division").style.backgroundColor = "#fea00c";
    document.getElementById("addition").style.color = "white";
    document.getElementById("subtraction").style.color = "white";
    document.getElementById("multiplication").style.color = "white";
    document.getElementById("division").style.color = "white";
}
//change button color
function add(){
    resetColor();
    document.getElementById("addition").style.backgroundColor = "white";
    document.getElementById("addition").style.color = "#FCA200";
}
function sub(){
    resetColor();
    document.getElementById("subtraction").style.backgroundColor = "white";
    document.getElementById("subtraction").style.color = "#FCA200";
}function mul(){
    resetColor();
    document.getElementById("multiplication").style.backgroundColor = "white";
    document.getElementById("multiplication").style.color = "#FCA200";
}function div(){
    resetColor();
    document.getElementById("division").style.backgroundColor = "white";
    document.getElementById("division").style.color = "#FCA200";
}