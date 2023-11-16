function ShowTime(){
    var c_time = new Date();
    var h = c_time.getHours();
    var m = c_time.getMinutes();
    var s = c_time.getSeconds();
    var session = "AM";
    // document.write(c_time);

    if(h>=12){
        session = "PM";
    }
    if(h>12){
        h = h-12;
    }


    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;

    var time = h +" : " + m + " : " + s +"  " + session;
    document.getElementById('p').innerText = time;

    
    setTimeout(() => {
        ShowTime()
    }, 1000);

   
}
