function updateTime(){
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  if (minutes < 10){
    minutes = "0" + minutes
  }
  var t_str;
  if(hours > 11){
    t_str = hours - 12 + ":" + minutes + " PM";
  } else {
    t_str = hours + ":" + minutes + " AM";
  }
  document.getElementById('time_span').innerHTML = t_str;
}
