//Bat dau voi viec x di truoc (chan x di truoc, le o di)
var soThuTu = 0;
//Khai bao cac truong hop co the thang
var truongHop1 = '';
var truongHop2 = '';
var truongHop3 = '';
var truongHop4 = '';
var truongHop5 = '';
var truongHop6 = '';
var truongHop7 = '';
var truongHop8 = '';
var diemX = 0;
var diemO = 0;
//do dai cac phan tu
var doDai1 = 0;
var doDai2 = 0;
var doDai3 = 0;
var doDai4 = 0;
var doDai5 = 0;
var doDai6 = 0;
var doDai7 = 0;
var doDai8 = 0;
var kiemTra1 = 0;
var kiemTra2 = 0;
//check
function check(){
    if(truongHop1 == 'xxx' || truongHop2 == 'xxx' || truongHop3 == 'xxx' || truongHop4 == 'xxx' || truongHop5 == 'xxx' || truongHop6 == 'xxx' || truongHop7 == 'xxx' || truongHop8 == 'xxx'){
        var displayX = document.getElementById('x-win');
        displayX.style.display = "block";
        diemX += 1;
        document.getElementById("point-x").innerHTML = diemX; 
        kiemTra1 = 2;
    }
    if(truongHop1 == 'ooo' || truongHop2 == 'ooo' || truongHop3 == 'ooo' || truongHop4 == 'ooo' || truongHop5 == 'ooo' || truongHop6 == 'ooo' || truongHop7 == 'ooo' || truongHop8 == 'ooo'){
        var displayO = document.getElementById('o-win');
        displayO.style.display = "block";
        diemO += 1;
        document.getElementById("point-o").innerHTML = diemO; 
        kiemTra2 = 2;
    }
    else{
        //do dai cac phan tu
        doDai1 = truongHop1.length;
        doDai2 = truongHop2.length;
        doDai3 = truongHop3.length;
        doDai4 = truongHop4.length;
        doDai5 = truongHop5.length;
        doDai6 = truongHop6.length;
        doDai7 = truongHop7.length;
        doDai8 = truongHop8.length;
        if(doDai1==3 && doDai2==3 && doDai3==3 && doDai4==3 && doDai5==3 && doDai6==3 && doDai7==3 && doDai8==3 && kiemTra1==0 && kiemTra2==0){
            var displaytwoChicken = document.getElementById('twoChicken');
            displaytwoChicken.style.display = "block";
        }
    }
}
var box1X = true;
function box1(){
    if (box1X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box1XO").innerHTML = 'X'; 
            box1XO.style.textShadow = "0 0 0.1em red";
            box1X = false; 
            truongHop1 += 'x';
            truongHop4 += 'x';
            truongHop7 += 'x';
            check();
        }
        else{
            document.getElementById("box1XO").innerHTML = 'O'; 
            box1XO.style.textShadow = "0 0 0.1em blue";
            box1X = false;
            truongHop1 += 'o';
            truongHop4 += 'o';
            truongHop7 += 'o';
            check();
        }
        soThuTu += 1;
    }
    else{}
}
var box2X = true;
function box2(){
    if (box2X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box2XO").innerHTML = 'X'; 
            box2XO.style.textShadow = "0 0 0.1em red";
            box2X = false; 
            truongHop2 += 'x';
            truongHop4 += 'x';
            check();
        }
        else{
            document.getElementById("box2XO").innerHTML = 'O'; 
            box2XO.style.textShadow = "0 0 0.1em blue";
            box2X = false;
            truongHop2 += 'o';
            truongHop4 += 'o';
            check();
        }
        soThuTu += 1;
    }
    else{}
}
var box3X = true;
function box3(){
    if (box3X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box3XO").innerHTML = 'X'; 
            box3XO.style.textShadow = "0 0 0.1em red";
            box3X = false; 
            truongHop3 += 'x';
            truongHop4 += 'x';
            truongHop8 += 'x';
            check();
        }
        else{
            document.getElementById("box3XO").innerHTML = 'O'; 
            box3XO.style.textShadow = "0 0 0.1em blue";
            box3X = false;
            truongHop3 += 'o';
            truongHop4 += 'o';
            truongHop8 += 'o';
            check();
        }
        soThuTu += 1;
    }
    else{}
}
var box4X = true;
function box4(){
    if (box4X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box4XO").innerHTML = 'X'; 
            box4XO.style.textShadow = "0 0 0.1em red";
            box4X = false; 
            truongHop1 += 'x';
            truongHop5 += 'x';
            check();
        }
        else{
            document.getElementById("box4XO").innerHTML = 'O'; 
            box4XO.style.textShadow = "0 0 0.1em blue";
            box4X = false;
            truongHop1 += 'o';
            truongHop5 += 'o';
            check();
        }
        soThuTu += 1;
    }
    else{}
}
var box5X = true;
function box5(){
    if (box5X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box5XO").innerHTML = 'X'; 
            box5XO.style.textShadow = "0 0 0.1em red";
            box5X = false; 
            truongHop2 += 'x';
            truongHop5 += 'x';
            truongHop7 += 'x';
            truongHop8 += 'x';
            check();
        }
        else{
            document.getElementById("box5XO").innerHTML = 'O'; 
            box5XO.style.textShadow = "0 0 0.1em blue";
            box5X = false;
            truongHop2 += 'o';
            truongHop5 += 'o';
            truongHop7 += 'o';
            truongHop8 += 'o';
            check();
        }
        soThuTu += 1;
    }
    else{}
}
var box6X = true;
function box6(){
    if (box6X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box6XO").innerHTML = 'X'; 
            box6XO.style.textShadow = "0 0 0.1em red";
            box6X = false; 
            truongHop3 += 'x';
            truongHop5 += 'x';
            check();
        }
        else{
            document.getElementById("box6XO").innerHTML = 'O'; 
            box6XO.style.textShadow = "0 0 0.1em blue";
            box6X = false;
            truongHop3 += 'o';
            truongHop5 += 'o';
            check();
        }
        soThuTu += 1;
    }
    else{}
}
var box7X = true;
function box7(){
    if (box7X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box7XO").innerHTML = 'X'; 
            box7XO.style.textShadow = "0 0 0.1em red";
            box7X = false; 
            truongHop1 += 'x';
            truongHop6 += 'x';
            truongHop8 += 'x';
            check();
        }
        else{
            document.getElementById("box7XO").innerHTML = 'O'; 
            box7XO.style.textShadow = "0 0 0.1em blue";
            box7X = false;
            truongHop1 += 'o';
            truongHop6 += 'o';
            truongHop8 += 'o';
            check();
        }
        soThuTu += 1;
    }
    else{}
}
var box8X = true;
function box8(){
    if (box8X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box8XO").innerHTML = 'X'; 
            box8XO.style.textShadow = "0 0 0.1em red";
            box8X = false;
            truongHop2 += 'x';
            truongHop6 += 'x';
            check();
        }
        else{
            document.getElementById("box8XO").innerHTML = 'O'; 
            box8XO.style.textShadow = "0 0 0.1em blue";
            box8X = false;
            truongHop2 += 'o';
            truongHop6 += 'o';
            check();
        }
        soThuTu += 1;
    }
    else{}
}
var box9X = true;
function box9(){
    if (box9X == true){
        if (soThuTu % 2 == 0){
            document.getElementById("box9XO").innerHTML = 'X'; 
            box9XO.style.textShadow = "0 0 0.1em red";
            box9X = false;
            truongHop3 += 'x';
            truongHop6 += 'x'; 
            truongHop7 += 'x';
            check();
        }
        else{
            document.getElementById("box9XO").innerHTML = 'O'; 
            box9XO.style.textShadow = "0 0 0.1em blue";
            box9X = false;
            truongHop3 += 'o';
            truongHop6 += 'o';
            truongHop7 += 'o';
            check();
        }
        soThuTu += 1;
    }
    else{}
}

// //reset
function reset(){
    soThuTu = 0;
    document.getElementById("box1XO").innerHTML = '';
    document.getElementById("box2XO").innerHTML = '';
    document.getElementById("box3XO").innerHTML = '';
    document.getElementById("box4XO").innerHTML = '';
    document.getElementById("box5XO").innerHTML = '';
    document.getElementById("box6XO").innerHTML = '';
    document.getElementById("box7XO").innerHTML = '';
    document.getElementById("box8XO").innerHTML = '';
    document.getElementById("box9XO").innerHTML = '';
    box1X = true;
    box2X = true;
    box3X = true;
    box4X = true;
    box5X = true;
    box6X = true;
    box7X = true;
    box8X = true;
    box9X = true;
    truongHop1 = '';
    truongHop2 = '';
    truongHop3 = '';
    truongHop4 = '';
    truongHop5 = '';
    truongHop6 = '';
    truongHop7 = '';
    truongHop8 = '';
    doDai1 = 0;
    doDai2 = 0;
    doDai3 = 0;
    doDai4 = 0;
    doDai5 = 0;
    doDai6 = 0;
    doDai7 = 0;
    doDai8 = 0;
    kiemTra1 = 0;
    kiemTra2 = 0;
}

//Change
function change(){
    if(soThuTu % 2 == 0){
        soThuTu += 1;
        document.getElementById("change").innerHTML = 'First: O';
    }        
    else{
        soThuTu += 1;
        document.getElementById("change").innerHTML = 'First: X';
    }
}

//Turn of display: Play X win
function okeXBtn(){
    var displayX = document.getElementById('x-win');
    displayX.style.display = "none";
    reset();
}
//Turn of display: Play O winfunction okeOBtn()
function okeOBtn(){
    var displayO = document.getElementById('o-win');
    displayO.style.display = "none";
    reset();
}
//Turn of display: Play O winfunction okeOBtn()
function oke2chickenBtn(){
    var displayTwoChicken = document.getElementById('twoChicken');
    displayTwoChicken.style.display = "none";
    reset();
}

