const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function getTime() {
  let date = new Date();

  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();

  timeChecker("hour", h);
  timeChecker("minute", m);
  timeChecker("second", s);

  hour.innerText = h < 10 ? "0" + h : h;
  minute.innerText = m < 10 ? "0" + m : m;
  second.innerText = s < 10 ? "0" + s : s;
}

getTime();

setInterval(getTime, 1000);

function timeChecker(t, n) {
  if ((t = "second")) {
    console.log("hello");
    if (n >= 60) {
      s = 0;
      m++;
    }
  } else if ((t = "minute")) {
    if (n >= 60) {
      m = 0;
      h++;
    }
  } else if ((t = "hour")) {
    if ((n = 24)) {
      (h = 0), (m = 0), (s = 0);
    }
  }
}
