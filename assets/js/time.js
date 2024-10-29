function updateTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes().toString().padStart(2, '0'); // Ensures two-digit minutes
  const isPM = hours >= 12;

  //Keep in 12 hour clock
  if (hours === 0) {
    hours = 12; 
  } else if (hours > 12) {
    hours -= 12; 
  }

  const tStr = `${hours}:${minutes} ${isPM ? 'PM' : 'AM'}`;
  document.getElementById('time_span').textContent = tStr;
}
