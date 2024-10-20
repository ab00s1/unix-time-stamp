let date = new Date();
let relative;

const todayDate = document.querySelector("body > div > div.running-time > h4:nth-child(4)");

  function updateDate() {
    date = new Date()
    todayDate.innerHTML = date.toLocaleTimeString().toLocaleUpperCase();
  }


const input = document.querySelector("#Timestamp");
const convert = document.querySelector(
  "body > div > div.input-fields > button"
);
const container = document.querySelector(".container");
let timestamp;

  function updateTime() {
    date = new Date()
    document.querySelector("body > div > div.running-time > h1").innerHTML = date.getTime();
  }

  setInterval(updateTime,1000)
  setInterval(updateDate,1000)

  updateDate()
  updateTime()

convert.addEventListener("click", (e) => {
  if (!timestamp) return;
  date = new Date(Number(timestamp));
  // console.log(date);
  document.querySelector(
    "body > table > tbody > tr:nth-child(2) > td"
  ).innerText = date.toISOString();
  document.querySelector(
    "body > table > tbody > tr:nth-child(4) > td"
  ).innerText = date.toGMTString();
  document.querySelector(
    "body > table > tbody > tr:nth-child(6) > td"
  ).innerText = date;

  relative = date - new Date();
  relative = relative / 60000 / 60 / 24 / 365;
  if (relative < 0)
    document.querySelector(
      "body > table > tbody > tr:nth-child(8) > td"
    ).innerText = `${Math.floor(Math.abs(relative))} years ago`;
  else
    document.querySelector(
      "body > table > tbody > tr:nth-child(8) > td"
    ).innerText = `in ${Math.floor(Math.abs(relative))} year(s)`;

  document.querySelector("body > table").style.display = "table";
  container.style.flexDirection = "row";
  container.style.height = "20vh";
});

input.addEventListener("input", (e) => {
  timestamp = e.target.value;
});
