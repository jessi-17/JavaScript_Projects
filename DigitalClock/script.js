function displaytime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let day = dateTime.getDate();
  let month = dateTime.getMonth() + 1;
  let year = dateTime.getFullYear();
  let session = document.getElementById("session");

const  DayofWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(dateTime.getDate);
  const currentDayOfWeek = DayofWeek[dateTime.getDay()];
  if (hrs >= 12) {
      session.innerHTML = "PM";
    } else {
        session.innerHTML = "AM";
    }
    
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    if(day<10){
        day = "0" + day;
    }
    if(month<10){
        month = "0" + month;
    }
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    document.getElementById("DAY").innerHTML = currentDayOfWeek;
    document.getElementById("Day").innerHTML = day;
    document.getElementById("Month").innerHTML = month;
    document.getElementById("year").innerHTML = year;
    hours.innerHTML = hrs;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
}


setTimeout(()=>{
    displaytime()
},1000);