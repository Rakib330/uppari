const targetdate = "1 jan 2026";
//const targetdate = "1 jan 2022";
function timer(){
    const newYear = new Date(targetdate);
    const today = new Date();

    var totalsecondleft = (newYear-today)/1000;

    var dayleft = Math.floor(totalsecondleft/3600/24);
    var hourleft = Math.floor(totalsecondleft/3600) % 24;
    var minutleft = Math.floor(totalsecondleft/60) % 60;
    var secondleft = Math.floor(totalsecondleft % 60);
    
    console.log(dayleft + "d " + hourleft + "h " + minutleft + "m " + secondleft + "s" );
    day.innerHTML = dayleft;
    hour.innerHTML = formet(hourleft);
    minute.innerHTML = formet(minutleft);
    second.innerHTML = formet(secondleft);

    function formet (value){
        return value < 10 ? `0${value}` : value ;
    }
}
timer();
setInterval(timer , 1000);//(infinity)
// const fs = require("fs");
// fs.renameFile("index.html","timer.html",(err)=>{
//     console.log("kam hogaya");
// });