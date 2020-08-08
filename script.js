var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js');
document.head.appendChild(jQueryScript);

var hrs = 0;

function chng(elem){
    if(elem.value =="ct") elem.value="mt", elem.innerHTML = "12 Hours", hrs=1;
    else elem.value = "ct", elem.innerHTML = "24 Hours", hrs=0;
}

function getTime(){
    console.log("Time showing")
    let 
        time = document.getElementById("time"),
        color = document.getElementById("color"),
        bg = document.getElementById("bg"),
        dt = new Date(),
        hour = dt.getHours(),
        min = dt.getMinutes(),
        val = "AM",
        sec = dt.getSeconds();

    if(hrs == 0){
        if(hour > 12){
            hour = hour - 12;
            val = "PM";
        };
    }
    else{
        val = "";
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }

    time.innerHTML = hour + ":" + min + ":" + sec + " " + val;
    
    if(hour < 10){
        hour = "0" + hour;
    }
    color.innerHTML = "#" + hour + min + sec;

    bg.style.backgroundColor = color.innerHTML;
    setTimeout(getTime, 1000);
};

getTime();