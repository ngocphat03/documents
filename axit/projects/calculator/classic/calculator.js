var calculation ="";
const audio = new Audio('audio.mp3');
function cl(){
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
    // per = calculation;
    // per = per * 0.01;
    calculation += '%' + '';
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
    // var text = x.toString();
    // calculation = calculation + text;
    calculation += x;
    document.getElementById("out").innerHTML = calculation;
    audio.play();
}
function cal(pt){
    // calculation1 = calculation;
    // calculation1 += pt;
    // calculation = "";
    calculation += pt;
    document.getElementById("out").innerHTML = calculation;
    audio.play();
}
function check(){
    for(i=0; i<=length; i++){
        if(testt[i]='%'){
            alert('hmm');
            testt[i]= '*0.01';
        }
    }
}
function res(){
    // calculationAll = calculation1 + calculation;
    // var result = eval(calculationAll);
    // var text = x.toString();
    // for(i=0; i<=length; i++){
    //     if(calculation[i]='%'){
    //         alert('hmm');
    //         calculation[i]= '*0.01';
    //     }
    // }
    // var testRes = calculation;
    // var calculation = testRes.replace("%", "*0.01");


    // calculation.replace("%", " *0.01"); 
    var testt = calculation;
    // calculation.replace('%','*0.01');
    var result = eval(testt.replace('%','*0.01'));   
    // alert(testt);
    document.getElementById("out").innerHTML = calculation + '=' + result;
    calculation = result;
    audio.play();
    var x = calculation.toString();
    calculation = x;
}

// function num(x){
//     calculation += x;
// }
// function cal(pt){
//     calculation += pt;
// }
// function res(){
//     var result = eval(calculation);
//     alert(calculation + "=" + result);
//     calculation="";
// }

//reset button collor
function resetColor(){
    document.getElementById("addition").style.backgroundColor = "white";
    document.getElementById("subtraction").style.backgroundColor = "white";
    document.getElementById("multiplication").style.backgroundColor = "white";
    document.getElementById("division").style.backgroundColor = "white";

    document.getElementById("nega").style.backgroundColor = "white";
    document.getElementById("perc").style.backgroundColor = "white";


    document.getElementById("addition").style.color = "black";
    document.getElementById("subtraction").style.color = "black";
    document.getElementById("multiplication").style.color = "black";
    document.getElementById("division").style.color = "black";

    document.getElementById("nega").style.color = "black";
    document.getElementById("perc").style.color = "black";
}
//change button color
function add(){
    rutGon();
    resetColor();
    document.getElementById("addition").style.backgroundColor = "black";
    document.getElementById("addition").style.color = "white";
}
function sub(){
    rutGon();
    resetColor();
    document.getElementById("subtraction").style.backgroundColor = "black";
    document.getElementById("subtraction").style.color = "white";
}function mul(){
    rutGon();
    resetColor();
    document.getElementById("multiplication").style.backgroundColor = "black";
    document.getElementById("multiplication").style.color = "white";
}function div(){
    rutGon();
    resetColor();
    document.getElementById("division").style.backgroundColor = "black";
    document.getElementById("division").style.color = "white";
}
function clRes(){
    rutGon();
    resetColor();
}
function neg(){
    rutGon();
    resetColor();
    document.getElementById("nega").style.backgroundColor = "black";
    document.getElementById("nega").style.color = "white";
}
function perc(){
    rutGon();
    resetColor();
    document.getElementById("perc").style.backgroundColor = "black";
    document.getElementById("perc").style.color = "white";
}
// function rutGon(){
//     if (calculation[length] > 5){
//         document.getElementById("out").style.fontSize = "10px";
//         alert('hmm');
//     }
// }