setInterval(()=>{
    console.clear();
    let day="AM";
    if(new Date().getHours() >=12) day="PM";
    console.log(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + " " + day);
}, 1000);