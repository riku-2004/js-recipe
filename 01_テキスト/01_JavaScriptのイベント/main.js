const alertM = function () {
  alert("クリックしちゃいましたね")
}

const button1 = document.getElementById("button")

button1.onclick = alertM

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function () {
  console.log("hello")
}

inputText.oninput = sayHello
inputDate.oninput = sayHello

document.onkeydown = function (e) {
  console.log(e.key)
}
