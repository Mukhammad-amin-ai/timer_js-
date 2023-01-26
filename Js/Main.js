let s = document.getElementById("s");
let m = document.getElementById("minut");
let plus = document.getElementById("splus");
let minus = document.getElementById("sminus");
let mplus = document.getElementById("mplus");
let mminus = document.getElementById("mminus");
let h = document.getElementById("h");
let hplus = document.getElementById("hplus");
let hminus = document.getElementById("hminus");
let start = document.getElementById("start");

plus.addEventListener("click", () => {
  if (s.innerHTML <= 58) {
    s.innerHTML++;
  }
});

minus.addEventListener("click", () => {
  if (s.innerHTML >= 1) {
    s.innerHTML--;
  } else {
    s.innerHTML = "00";
  }
});

mplus.addEventListener("click", () => {
  if (m.innerHTML <= 58) {
    m.innerHTML++;
  }
});

mminus.addEventListener("click", () => {
  if (m.innerHTML >= 1) {
    m.innerHTML--;
  } else {
    m.innerHTML = "00";
  }
});
hplus.addEventListener("click", () => {
  if (h.innerHTML <= 23) {
    h.innerHTML++;
  }
});

hminus.addEventListener("click", () => {
  if (h.innerHTML >= 1) {
    h.innerHTML--;
  } else {
    h.innerHTML = "00";
  }
});

start.addEventListener("click", () => {
  let a = setInterval(() => {
    if (+s.innerHTML > 0) {
      s.innerHTML--;
    } else if (+m.innerHTML > 0) {
      m.innerHTML--;
      s.innerHTML = "59";
    } else if (+h.innerHTML > 0) {
      h.innerHTML--;
      m.innerHTML = "59";
      s.innerHTML = "59";
    } else {
      clearInterval(a);
    }
  }, 1000);
});
