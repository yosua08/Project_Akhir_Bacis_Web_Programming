alert("Selamat Datang");

const cacheKey = "NUMBER";

if (typeof Storage !== "undefined") {
  if (localStorage.getItem(cacheKey) === "undefined") {
    localStorage.setItem(cacheKey, 0);
  }

  const button1 = document.querySelector("#button1");
  const clear1 = document.querySelector("#clear1");
  const count = document.querySelector("#count");
  const button2 = document.querySelector("#button2");
  const clear2 = document.querySelector("#clear2");
  const button3 = document.querySelector("#button3");
  const clear3 = document.querySelector("#clear3");
  const button4 = document.querySelector("#button4");
  const clear4 = document.querySelector("#clear4");

  button1.addEventListener("click", function (event) {
    let number = localStorage.getItem(cacheKey);
    number++;
    localStorage.setItem(cacheKey, number);
    count.innerText = localStorage.getItem(cacheKey);
  });
  clear1.addEventListener("click", function (event) {
    localStorage.removeItem(cacheKey);
    count.innerText = 0;
  });
  button2.addEventListener("click", function (event) {
    let number = localStorage.getItem(cacheKey);
    number++;
    localStorage.setItem(cacheKey, number);
    count.innerText = localStorage.getItem(cacheKey);
  });
  clear2.addEventListener("click", function (event) {
    localStorage.removeItem(cacheKey);
    count.innerText = 0;
  });
  button3.addEventListener("click", function (event) {
    let number = localStorage.getItem(cacheKey);
    number++;
    localStorage.setItem(cacheKey, number);
    count.innerText = localStorage.getItem(cacheKey);
  });
  clear3.addEventListener("click", function (event) {
    localStorage.removeItem(cacheKey);
    count.innerText = 0;
  });
  button4.addEventListener("click", function (event) {
    let number = localStorage.getItem(cacheKey);
    number++;
    localStorage.setItem(cacheKey, number);
    count.innerText = localStorage.getItem(cacheKey);
  });
  clear4.addEventListener("click", function (event) {
    localStorage.removeItem(cacheKey);
    count.innerText = 0;
  });
} else {
  alert("Browser tidak mendukung Web Storage");
}
