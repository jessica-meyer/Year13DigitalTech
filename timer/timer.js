let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hour_dot = document.querySelector('.hour_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

//CHANGE TO INPUT VARIABLE
let endDate = '09/27/2024 00:00:00';

let x = setInterval(function(){
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let distance = now - countDown;

  // time calculations
  let h = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / (1000));

  // output calculations
  hours.innerHTML = h + "<br><span>Hours<span>";
  minutes.innerHTML = m + "<br><span>Minutes<span>";
  seconds.innerHTML = s + "<br><span>Seconds<span>";

  // animation
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hour_dot.style.transform = `rotateZ(${h * 15}deg)`;
  min_dot.style.transform = `rotateZ(${m * 6}deg)`;
  sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
});