function updateTime(){
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  if (minutes < 10){
    minutes = "0" + minutes
  }
  var tStr;
  if (hours == 12) {
    tStr = hours + ":" + minutes + " PM"
  } else if(hours > 12){
    tStr = hours - 12 + ":" + minutes + " PM";
  } else {
    tStr = hours + ":" + minutes + " AM";
  }
  document.getElementById('time_span').innerHTML = tStr;
}
