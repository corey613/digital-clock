var clock = document.getElementById('clock');

function showClock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var period = "AM";



    if (h == 0) h = 12;

    if( h > 12){
        h = h -12;
        period = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    var time = h + ":" + m + ":" + s + " " + period;
    clock.innerHTML = time;
   

    setTimeout(showClock, 1000);
}
showClock();