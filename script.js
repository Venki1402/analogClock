var hour = document.getElementById("hour_hand");
var minute = document.getElementById("minute_hand");
var seconds = document.getElementById("second_hand");

var clockIsRunning = true;

var set_clock = setInterval(function clock(){
    if(clockIsRunning){
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();

        var calc_hr = (hr * 30) + (min / 2);
        var calc_min = (min * 6) + (sec / 10);
        var calc_sec = sec*6;

        hour.style.transform = 'rotate(' + calc_hr + "deg)";
        minute.style.transform = 'rotate(' + calc_min + 'deg)';
        seconds.style.transform = 'rotate(' + calc_sec + 'deg)';
    }
    
}, 1000);


var pause = document.getElementById("pause");
pause.addEventListener("click",event => {
    if(clockIsRunning){
        clockIsRunning = false;
        pause.style.backgroundColor = "#4bb82a";
        pause.textContent = "Start";
        pause.onmouseover = () =>{
            pause.style.backgroundColor = "green";
        }
        pause.onmouseout = () =>{
            pause.style.backgroundColor = "#4bb82a";
        }
        
    }
    else{
        clockIsRunning = true;
        pause.style.backgroundColor = "#F8333C";
        pause.textContent = "Stop";
        pause.onmouseover = () =>{
            pause.style.backgroundColor = "#b31c24";
        }
        pause.onmouseout = () =>{
            pause.style.backgroundColor = "#F8333C";
        }
    }
});


