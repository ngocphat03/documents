
function start(){
    var second = parseInt(document.getElementById("inputSecond").value);
    var minute = parseInt(document.getElementById("inputMinute").value);
    var hours = parseInt(document.getElementById("inputHours").value);
    var batDau = setInterval(giamMotGiay, 1000); 
    if(second == 0 && minute == 0 && hours == 0){
        clearInterval(batDau);
        }
    function giamMotGiay(){
        if(second>0){
            second--;
            console.log(hours + ":" + minute + ":" + second);
            document.getElementById('second').innerText = second;
            document.getElementById('minute').innerText = minute;
            document.getElementById('hours').innerText = hours;
            second.textContent = second;
        }
        if(second == 0 && minute == 0 && hours == 0){
            console.log("done");
            alert('Ngọc Phát mất mũ bảo hiểm rồi =((');
            clearInterval(batDau);
            second, minute, hours = 0;
        }
        if(second <= 0){
            second = 60;
            minute--;
            setInterval(giamMotPhut, 60000);
        }
    }  
    function giamMotPhut(){
        if(minute>0){
            minute--;
            console.log(hours + ":" + minute + ":" + second);
            document.getElementById('second').innerText = second;
            document.getElementById('minute').innerText = minute;
            document.getElementById('hours').innerText = hours;
        }
        if(second == 0 && minute == 0 && hours == 0){
            console.log("done");
            alert('Ngọc Phát mất mũ bảo hiểm rồi =((');
            clearInterval(batDau);
            second, minute, hours = 0;
        }
        if(minute <= 0){
            if(hours>0){
                minute = 59;
                setInterval(hours--, 60000)
                setInterval(giamMotGio, 3600000);
            }
            else{
                hours, minute, second = 0;
            }
        }
        if(second == 0 && minute == 0){
            alert('Ngọc Phát mất mũ bảo hiểm rồi =((');
        }
    }function giamMotGio(){
        if(hours>0){
            hours--;
            console.log(hours + ":" + minute + ":" + second);
            document.getElementById('second').innerText = second;
            document.getElementById('minute').innerText = minute;
            document.getElementById('hours').innerText = hours;
        }
        if(second == 0 && minute == 0 && hours == 0){
            console.log("done");
            alert('Ngọc Phát mất mũ bảo hiểm rồi =((');
            clearInterval(batDau);
            second, minute, hours = 0;
        }
    }
}


function end(){
    location.reload();
} 